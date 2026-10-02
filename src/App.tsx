import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Ingredients from "./pages/Ingredients";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/terms-conditions" element={<LegalPage slug="terms-conditions" />} />
          <Route path="/privacy-policy" element={<LegalPage slug="privacy-policy" />} />
          <Route path="/return-policy" element={<LegalPage slug="return-policy" />} />
          <Route path="/refund-policy" element={<LegalPage slug="refund-policy" />} />
          <Route path="/shipping-policy" element={<LegalPage slug="shipping-policy" />} />
          <Route path="/terms-of-purchase" element={<LegalPage slug="terms-of-purchase" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
