import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import {RecoilRoot} from 'recoil'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    //
    //AuthProfider tawa7d maydkhl ila madazch 3la login (rani create compt f firebase email and password bach ngd ndkhl)
    <RecoilRoot>
      {/*HOC(Heigh Order Component) */}
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  )
}

export default MyApp
