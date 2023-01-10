import "../styles/globals.css";

// import Vercel Audience Analytics, Documentation: https://vercel.com/docs/next.js/vercel-analytics
import { Analytics } from '@vercel/analytics/react';

// import components
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import toast, { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
      <Footer />
    </div>
  );
}

export default MyApp;
