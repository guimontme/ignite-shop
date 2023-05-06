import { AppProps } from "next/app"
import { globalStyles } from "../styles/globals"
import Image from "next/image"

import logoSvg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
  <Container>
    <Header>
      <Image src={logoSvg} alt="Logo Ignite Shop" />
    </Header>
    <Component {...pageProps} />
  </Container>
  )
}
