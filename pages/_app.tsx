import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      {Component ? <Component {...pageProps} /> : null}
    </ChakraProvider>
  )
}
export default MyApp
