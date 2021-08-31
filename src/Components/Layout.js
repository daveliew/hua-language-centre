import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/global.css";

const layoutStyles = {
    padding: "0.5rem",
    margin: "0 auto",
    maxWidth: "100vw",
};

const contentStyles = {
    height: "70vh",
};

const Layout = ({ pageTitle, children }) => {
    return (
        <div style={layoutStyles}>
            <NavBar />
            <title>{pageTitle}</title>
            <hr />
            <div className="contentStyles">{children}</div>
            <hr />
            <Footer />
        </div>
    );
};

export default Layout;
