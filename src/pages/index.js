import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Card from "../components/Card";
import CustomizedAccordions from "../components/Accordion";
import herobanner from "../images/herobanner.jpeg";

// styles

const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
};
const headingAccentStyles = {
    color: "#414042",
};

const sectionStyles = {
    // ...heroStyles,
    minHeight: "30vh",
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const heroStyles = {
    ...sectionStyles,
    backgroundImage: `url(${herobanner})`,
    backgroundRepeat: "no-repeat",
};

const heroHeadingStyles = {
    marginTop: "40vh",
    marginBottom: "2rem",
    fontSize: "3rem",
    // backgroundColor: "#f0ede9",
    // opacity: "0.9",
};

const heroHeadingAccentStyles = {
    color: "#f89773",
};

// markup
export default function IndexPage({ data }) {
    return (
        <Layout pageTitle="Home">
            <main>
                <title>Home Page</title>
                <section style={heroStyles}>
                    <h1 style={heroHeadingStyles}>
                        Learn Chinese
                        <br />
                        <span style={heroHeadingAccentStyles}>
                            the Fun and Effective Way!
                        </span>
                    </h1>
                </section>
                <hr />
                <section style={sectionStyles}>
                    <h1 style={headingStyles}>
                        <span style={headingAccentStyles}>Programmes</span>
                    </h1>
                    <CustomizedAccordions />
                </section>
                <hr />
                <section style={sectionStyles}>
                    <h1 style={headingStyles}>Why Hua</h1>
                    <Card
                        author="test"
                        title={data.allWpPost.nodes[0].id}
                        // date={recipeItem.date}
                        // description={recipeItem.description}
                    />
                </section>
            </main>
        </Layout>
    );
}

export const pageQuery = graphql`
    query {
        allWpPost(filter: { date: { gte: "2021" } }) {
            nodes {
                id
                excerpt
                date
            }
        }
    }
`;
