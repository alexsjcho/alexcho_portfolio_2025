import type { AppProps } from 'next/app'
import '../styles/globals.css'  // adjust path as needed 

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// Make sure to have this default export
export default MyApp 