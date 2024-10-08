import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Compenent/NavBar (HaoZhe)/NavBar"; // Original Navbar
import MainNavBar from "./Compenent/MainNavBar (Marcus)/MainNavBar"; // MainPage Navbar
import Hero from "./Compenent/Hero (HaoZhe)/Hero";
import Programs from "./Compenent/Programs (HaoZhe)/Programs";
import Title from "./Compenent/Title (HaoZhe)/Title";
import About from "./Compenent/About (HaoZhe)/About";
import Testimonials from "./Compenent/Testimonials (HaoZhe)/Testimonials";
import Footer from "./Compenent/Footer (HaoZhe)/Footer";
import Contact from "./Compenent/Contact (HaoZhe)/Contact";
import Transaction from "./Compenent/Transaction (HaoZhe)/Transaction";
import Category from "./Compenent/Category (Kaile)/Category";
import MainPage from "./Compenent/MainPage (Kaile)/MainPage";
import Vote from "./Compenent/Vote (Kaile)/Vote"; 
import Donate from "./Compenent/Donate (Kaile)/Donate"; 
import VoteProject from "./Compenent/VoteProject (Kaile)/VoteProject";
import Bantuan from "./Compenent/Bantuan (Kaile)/Bantuan";
import BantuanProject from "./Compenent/BantuanProject (ZJ)/BantuanProject";
import BantuanApply from "./Compenent/BantuanApply (Kaile)/BantuanApply";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import UserProfile from "./Compenent/UserProfile (HaoZhe)/UserProfile"; 
import VoteProject2 from "./Compenent/VoteProject2/VoteProject2";

 const App = () => {
  return (
    <Router>
      <div>
        <ToastContainer /> {/* Make sure to include this */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar /> {/* Original NavBar */}
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
                  <Title subTitle="Trust" title="Why Blockchain?" />
                  <Testimonials />
                </div>
                <Title subTitle="Contact Us" title="Get in Touch" />
                <div className="container">
                  <Contact />
                  <Footer />
                </div>
              </>
            }
          />

          <Route path="/category" element={<Category />} />

          <Route
            path="/mainpage"
            element={
              <>
                <MainNavBar /> {/* MainNavBar for the MainPage */}
                <MainPage />
              </>
            }
          />
          {/* MainPage Route */}
          <Route path="/mainpage" element={<MainPage />} />

          {/* Vote Page Route */}
          <Route path="/vote" element={<Vote />} />

          {/* VoteProject Page Route */}
          <Route path="/vote-project" element={<VoteProject />} />

          {/* Donate Page Route */}
          <Route path="/donate" element={<Donate />} />

          {/* Bantuan Page Route */}
          <Route path="/bantuan" element={<Bantuan />} />

          {/* BantuanProject Page Route */}
          <Route path="/bantuan-project" element={<BantuanProject />} />

          {/* BantuanProject Page Route */}
          <Route path="/apply" element={<BantuanApply />} />

          <Route path="/userprofile" element={<UserProfile />} />

          <Route path="/voteproject2" element={<VoteProject2/>} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;