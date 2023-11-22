import '@/styles/bootstrap.min.css'
import 'animate.css'
import '@/styles/boxicons.min.css'
import '@/styles/flaticon.css'
import "@/styles/slick.css"
import 'react-accessible-accordion/dist/fancy-example.css'
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import '@/styles/style.css'
// Global Responsive Style
import '@/styles/responsive.css'
// Global RTL Style
import '@/styles/rtl.css'

// Multicolor if you want this color comment out 
// import '@/styles/colors/brink-pink-style.css'
// import '@/styles/colors/pink-style.css'
// import '@/styles/colors/purple-style.css'  

import { useEffect } from 'react'
import Layout from '@/components/_App/Layout'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import i18n from 'i18n'
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
    
    const store = useStore(pageProps.initialReduxState);
    const router = useRouter();
    let selectedLanguage = "";

    useEffect(() => {
        selectedLanguage = localStorage.getItem("selectedLanguage");
        i18n.changeLanguage(selectedLanguage); // Set the default locale here
      }, []);

    return (
        <>
            <Provider store={store}>
                <Layout />

                <Component {...pageProps} />
            </Provider>
        </>
    )
}

