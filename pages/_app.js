import '../styles/globals.css'
import { Provider } from "react-redux";
import { store } from './../Redux/store/store'
import Header from './../Components/Header/Header'
import Footer from './../Components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>  <Provider store={store} >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
    </>

  )
}

export default MyApp
