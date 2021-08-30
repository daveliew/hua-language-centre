import React from "react";
import NavBar from "./NavBar";

const pageStyles = {
    padding: "0.5rem",
    fontFamily: "Poppins, -apple-system, Roboto, sans-serif, serif",
};
const descriptionStyle = {
    color: "#BC027F",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
};

const Layout = ({ children }) => {
    return (
        <div style={pageStyles}>
            <NavBar />
            <hr />
            <div className="content">{children}</div>
            <footer>
                <hr />
                <h3 style={descriptionStyle}>Start of Footer</h3>
                <a>Privacy Policy</a>
                <span> | </span>
                <p>Follow Us</p>
                <a href="https://www.facebook.com/hualanguage/">
                    <img
                        src="../../public/icons/icon-144x144.png"
                        alt="fb logo"
                    />
                </a>
                <p>Copyright 2021 Hua Language Centre</p>
            </footer>
        </div>
    );
};

export default Layout;
