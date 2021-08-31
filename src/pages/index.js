import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Card from "../components/Card";
import CustomizedAccordions from "../components/Accordion";

// styles

const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
};
const headingAccentStyles = {
    color: "#414042",
};

const heroStyles = {
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const sectionStyles = {
    ...heroStyles,
    minHeight: "30vh",
};

// markup
export default function IndexPage({ data }) {
    return (
        <Layout pageTitle="Home">
            <main>
                <title>Home Page</title>
                <section style={heroStyles}>
                    <h1 style={headingStyles}>
                        Call to Action
                        <br />
                        <span style={headingAccentStyles}>
                            — Our Value Props
                        </span>
                        <span role="img" aria-label="Party popper emojis">
                            🎉🎉🎉
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
