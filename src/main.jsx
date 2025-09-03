import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/Home/HomePage.jsx";
import ProductsPage from "./landing_page/Products/ProductsPage.jsx";
import AboutPage from "./landing_page/About/AboutPage.jsx";
import SignUppage from "./landing_page/SignUp/SignUpPage.jsx";
import SupportPage from "./landing_page/Support/SupportPage.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import NotFound from "./landing_page/NotFound.jsx";
import Pricing from "./landing_page/Pricing/PricingPage.jsx"
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/signup" element={<SignUppage />}></Route> 
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
