import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <NavBar />
            <div className="content">{children}</div>
            <footer>
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
