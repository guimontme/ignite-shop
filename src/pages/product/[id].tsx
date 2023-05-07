
import { GetStaticPaths, GetStaticProps } from "next";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";
import Image from "next/image";

import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";
interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  }
}

export default function Product({product}: ProductProps) {
  const [isCreateCheckoutSession, setIsCreateCheckoutSession] = useState(false);
  async function handleByProduct() {
    setIsCreateCheckoutSession(true);
    try {
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl

    } catch (err) {
      setIsCreateCheckoutSession(false);
      alert('Fail to redirect to Checkout')
    }
  }
  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt={product.name} width={520} height={480} />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <h3 className="price">{product.price}</h3>
          <p>{product.description}</p>
          <button 
            disabled={isCreateCheckoutSession} 
            onClick={handleByProduct}>Purchase now</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

  export const getStaticPaths: GetStaticPaths = () => {
    return {
      paths: [
        // { params: { id: 'prod_NqaUcdyEsDZYOm' }},
      ],
      fallback: 'blocking',
    }
  }

  export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
      expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price;

    return {
      props: {
        product: {
          id: product.id,
          name: product.name,
          imageUrl: product.images[0],
          price: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(price.unit_amount / 100),
          description: product.description,
          defaultPriceId: price.id,
        }
      },
      revalidate: 60 * 60 * 1,
    };
  }

