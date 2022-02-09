import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Document</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>APP</h1>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
