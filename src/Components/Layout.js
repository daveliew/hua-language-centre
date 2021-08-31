import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/global.css";

const layoutStyles = {
    padding: "0.5rem",
    margin: "0 auto",
    maxWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
};

const contentStyles = {
    minHeight: "50vh",
    padding: "1rem",
    margin: "0 auto",
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
};

const navStyles = {
    position: "sticky",
    top: 0,
};

const Layout = ({ pageTitle, children }) => {
    return (
        <div style={layoutStyles}>
            <NavBar style={navStyles} />
            <title>{pageTitle}</title>
            <div style={contentStyles}>{children}</div>
            <hr />
            <Footer />
        </div>
    );
};

export default Layout;
