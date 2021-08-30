import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const pageStyles = {
    padding: "0.5rem",
    fontFamily: "Poppins, -apple-system, Roboto, sans-serif, serif",
};

const contentStyles = {
    height: "70vh",
};

const Layout = ({ pageTitle, children }) => {
    return (
        <div style={pageStyles}>
            <NavBar />
            <title>{pageTitle}</title>
            <hr />
            <div className="contentStyles">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
