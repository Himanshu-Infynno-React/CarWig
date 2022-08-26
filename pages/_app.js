import '../styles/globals.css'
import Header from './../Components/Header/Header'
import Footer from './../Components/Footer/Footer'
import { wrapper } from './../Redux/store/store';

function MyApp({ Component, pageProps }) {
  return (
    <>  
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>

  )
}

export default wrapper.withRedux(MyApp)
