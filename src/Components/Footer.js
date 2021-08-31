import React from "react";

const sectionStyles = {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    marginTop: "1rem",
};

const containerStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "1rem",
};

const descriptionStyles = {
    color: "#BC027F",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
};

const Footer = () => {
    return (
        <footer style={sectionStyles}>
            <container style={containerStyles}>
                <a>Privacy Policy</a>
                <span> | </span>
                <p>Follow Us</p>
                <a href="https://www.facebook.com/hualanguage/">
                    <img
                        src="../../public/icons/icon-144x144.png"
                        alt="fb logo"
                    />
                </a>
            </container>
            <p>Copyright 2021 Hua Language Centre</p>
        </footer>
    );
};

export default Footer;
