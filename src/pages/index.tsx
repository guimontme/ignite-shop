import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import { useKeenSlider } from 'keen-slider/react';
import { GetStaticProps } from "next";
import { stripe } from "../lib/stripe";

import 'keen-slider/keen-slider.min.css';
import Stripe from "stripe";
import Link from "next/link";
import Head from "next/head";


interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({products}: HomeProps) {
  const [sliderRef] = useKeenSlider({
    mode: "snap",
    slides: {
      perView: 2,
      spacing: 52,
    }
  })

  return (
    <>
      <Head>
        <title>Ignite Shop | T-Shirts for devs</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        { products.map(product => {
            return (
              <Product className="keen-slider__slide" key={product.id} >
                <Image 
                  src={product.imageUrl} alt={product.name}
                  width={520} 
                  height={480} />
                <Link 
                href={`product/${product.id}`}
                prefetch={false}
                >
                  <footer>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </footer>
                </Link>
              </Product>
            ) 
          })
        }
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props : {
      products
    },
    revalidate: 60 * 60 * 2,
  }

}