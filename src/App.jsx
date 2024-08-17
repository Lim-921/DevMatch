import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Compenent/NavBar (HaoZhe)/NavBar";
import Hero from "./Compenent/Hero (HaoZhe)/Hero";
import Programs from "./Compenent/Programs (HaoZhe)/Programs";
import Title from "./Compenent/Title (HaoZhe)/Title";
import About from "./Compenent/About (HaoZhe)/About";
import Testimonials from "./Compenent/Testimonials (HaoZhe)/Testimonials";
import Footer from "./Compenent/Footer (HaoZhe)/Footer";
import Contact from "./Compenent/Contact (HaoZhe)/Contact";
import Transaction from "./Compenent/Transaction (HaoZhe)/Transaction";
import Category from "./Compenent/Category (Kaile)/Category"; // Import Category component

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Title subTitle="Transaction Check" title="Verify with MASCHAIN" />
                <Transaction />
                <Title
                  subTitle="Donate to Transparent Programs"
                  title="What We Offer"
                />
                <Programs />
                <About />
                <div className="container">
                  <Title subTitle="Trust" title="Reason We Utilise Blockchain" />
                  <Testimonials />
                </div>
                <Title subTitle="Contact Us" title="Get in Touch" />
                <div className="container">
                  <Contact />
                  <Footer />
                </div>
              </div>
            }
          />

          {/* Category Page Route */}
          <Route path="/category" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
