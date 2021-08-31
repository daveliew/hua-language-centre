import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const sectionStyles = {
    display: "flex",
    minWidth: "30vw",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
};

const Container = styled.div`
    margin: 1rem;
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: flex-end;
    display: inline-grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 0.5rem;
`;

const containerStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "1rem",
};

const descriptionStyles = {
    color: "#414042",
    fontSize: "0.8rem",
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
};

const Footer = () => {
    return (
        <footer style={sectionStyles}>
            <div>
                <a href="https://hua.com.sg/privacy-policy/">Privacy Policy</a>
                <span> | </span>
                <Container>
                    Follow Us
                    <a href="https://www.facebook.com/hualanguage/">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                    <a href="https://www.instagram.com/hualanguage/">
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </a>
                </Container>
            </div>
            <p style={descriptionStyles}>
                Copyright {new Date().getFullYear()} Hua Language Centre
            </p>
        </footer>
    );
};

export default Footer;
