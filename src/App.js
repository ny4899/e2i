import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Routes/Navbar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import Industry from "./Pages/Industry";
import Blogs from "./Pages/Blogs";
import ContactUs from "./Pages/ContactUs";
import NoPage from "./Pages/NoPage";
import Footer from "./Routes/Footer";
import ScrollToTop from "./Components/Scrolltotop";

const App = () => {
  return (
    <>
      <HashRouter>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </HashRouter>
    </>
  );
};

export default App;
