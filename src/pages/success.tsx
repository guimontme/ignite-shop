import Link from "next/link";
import { SuccessContainer, SuccessImageContainer } from "../styles/pages/success";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

export default function Success({customerName, product} : SuccessProps) {
    return (
      <>
      <Head>
        <title>Finished purchase | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Finished purchase</h1>
        <SuccessImageContainer>
         <Image src={product.imageUrl} width={115} height={106} alt={product.name} /> 
        </SuccessImageContainer>
        <p>Uhuull! <strong>{customerName}</strong>, your <strong>{product.name}</strong> is goin&apos; to your home. 
        </p>
        <Link href={'../'}>
          Back to catalog
        </Link>
      </SuccessContainer>
      </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  if(!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  
  const sessionId = String(query.session_id);


  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })
  const customerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product; 
  return {
    props: {
      customerName,
      product: {
        name: product.name, 
        imageUrl: product.images[0],
      } 
      
    }
  }
}