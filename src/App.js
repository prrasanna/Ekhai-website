import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import ITService from "./components/services/ITService";
import LegalService from "./components/services/LegalService";
import CSRService from "./components/services/CSRService";
import RecruitmentService from "./components/services/RecruitmentService";
import CareerService from "./components/services/CareerService";
import SouvenirService from "./components/services/SouvenirService";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/* Scroll to top when navigating */
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
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Service Detail Pages */}
          <Route path="/services/it" element={<ITService />} />
          <Route path="/services/legal" element={<LegalService />} />
          <Route path="/services/csr" element={<CSRService />} />
          <Route path="/services/recruitment" element={<RecruitmentService />} />
          <Route path="/services/careers" element={<CareerService />} />
          <Route path="/services/souvenir" element={<SouvenirService />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
