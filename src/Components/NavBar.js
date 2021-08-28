import { Link } from "gatsby";
import React from "react";

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
};
const headingAccentStyles = {
    color: "#663399",
};

const linkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
};

const NavBar = () => {
    return (
        <nav>
            <h1>Hua Language Centre</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </nav>
    );
};
export default NavBar;
