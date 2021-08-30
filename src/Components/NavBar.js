import { Link } from "gatsby";
import * as React from "react";

// styles
const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#414042",
};
const titleStyle = {
    color: "#2da64e",
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
    fontSize: "1.5rem",
    fontWeight: "700",
};
const headingAccentStyles = {
    color: "#2da64e",
};

const linkContainerStyle = {
    display: "flex",
    width: "70%",
    flexDirection: "horizontal",
    justifyContent: "space-around",
    backgroundColor: "#fef6f0",
};
const docLinkStyle = {
    ...linkStyle,
    listStyleType: "none",
    marginBottom: 24,
};
const linkStyle = {
    color: "#f89773",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
};
// data
const links = [
    {
        text: "ABOUT",
        url: "/about",
        description:
            "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    },
    {
        text: "NEWS",
        url: "/posts",
        description: "use gQL to create fetch",
    },
    {
        text: "PROGRAMMES",
        url: "/programmes",
        description: "Write copy",
    },
    {
        text: "Schedule",
        url: "https://hua.com.sg/class-schedule/",
        description: "Link to API fetch",
    },
    {
        text: "Locations",
        url: "https://www.google.com/maps/dir/1.3256577,103.8116813/101+Thomson+Rd,+Hua+Language+Centre+(United+Square),+307591/@1.3235171,103.810198,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31da19e8096a04b3:0x4202a8553eb29c4!2m2!1d103.8432704!2d1.317304",
        description:
            "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    },
    {
        text: "Contact",
        url: "https://hua.com.sg/contact/",
        description: "link to adaptive",
    },
];

const NavBar = () => {
    return (
        <nav style={sectionStyle}>
            <div>
                <span style={titleStyle}>huá</span>
                <h1 style={headingAccentStyles}>Language Centre</h1>
            </div>
            <div style={linkContainerStyle}>
                {links.map((link) => (
                    <span style={docLinkStyle}>
                        <Link style={linkStyle} href={`${link.url}`}>
                            {link.text}
                        </Link>
                    </span>
                ))}
            </div>
        </nav>
    );
};
export default NavBar;
