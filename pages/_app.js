import "../styles/globals.css";

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
      <Footer />
    </div>
  );
}

export default MyApp;
