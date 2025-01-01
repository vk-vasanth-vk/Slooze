import NavBar from "../components/NavBar";
import HomeSec from "../components/HomeSec";
import ProductSec from "../components/ProductSec";
import CompanySec from "../components/CompanySec";
import Footer from "../components/Footer";
import "./style.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeSec />
      <ProductSec />
      <CompanySec />
      <Footer />
    </>
  );
}
