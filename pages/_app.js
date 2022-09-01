import '../styles/globals.css'
import Header from './../Components/Header/Header'
import Footer from './../Components/Footer/Footer'
import store  from './../Redux/store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>

  )
}

export default MyApp
// export default wrapper.withRedux(MyApp)
