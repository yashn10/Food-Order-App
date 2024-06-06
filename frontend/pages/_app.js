// pages/_app.js
import '../public/css/bootstrap.min.css';
import '../public/css/style.css';
import '../public/css/responsive.css';
// import '../public/css/jquery.mCustomScrollbar.min.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/images/fevicon.png" type="image/gif" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />

                <script src="/js/jquery.min.js"></script>
                <script src="/js/popper.min.js"></script>
                <script src="/js/bootstrap.bundle.min.js"></script>
                <script src="/js/jquery-3.0.0.min.js"></script>
                <script src="/js/plugin.js"></script>

                <script src="/js/jquery.mCustomScrollbar.concat.min.js"></script>
                <script src="/js/custom.js"></script>
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
