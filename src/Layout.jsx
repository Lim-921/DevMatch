import React from "react";
import Navbar from "./Compenent/NavBar/NavBar";
import Footer from "./Compenent/Footer/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
