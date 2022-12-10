import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //HOC(Heigh Order Component)
    //AuthProfider tawa7d maydkhl ila madazch 3la login (rani create compt f firebase email and password bach ngd ndkhl)
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
