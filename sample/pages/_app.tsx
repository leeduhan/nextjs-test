import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>APP</h1>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
