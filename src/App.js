import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/* ===== Scroll To Top On Route Change ===== */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* Navbar - visible on all pages */}
      <Navbar />

      {/* Page Routes */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer - visible on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
