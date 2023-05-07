import { AppProps } from "next/app"
import { globalStyles } from "../styles/globals"
import Image from "next/image"

import logoSvg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"
import Link from "next/link"

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
  <Container>
    <Header>
      <Link href={'../'} prefetch={false}>
        <Image src={logoSvg} alt="Logo Ignite Shop" />
      </Link>
    </Header>
    <Component {...pageProps} />
  </Container>
  )
}
