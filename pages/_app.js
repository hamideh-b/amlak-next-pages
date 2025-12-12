import Footer from "@/Components/modules/Footer/Footer";
import Header from "@/Components/modules/Header/Header";
import Real from "@/Components/modules/Real/Real";
import Sidebar from "@/Components/modules/Sidebar/Sidebar";
import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <div className="container" dir="">
      <Sidebar />
      <Header />
      <Real />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
