import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

// styles
const pageStyles = {
    color: "#232129",
    padding: "0.5rem",
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

// markup
export default function IndexPage({ data }) {
    return (
        <Layout pageTitle="Home">
            <main style={pageStyles}>
                <title>Home Page</title>
                <section>
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
                    <h4>Posts</h4>
                    {data.allWpPost.edges.map((node) => (
                        <div>
                            <p>{node.title}</p>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: node.content,
                                }}
                            />
                        </div>
                    ))}
                    {/* highlight-end */}
                </section>
                <section>
                    <h1 style={headingStyles}>
                        Products
                        <br />
                        <span style={headingAccentStyles}>Grid</span>
                    </h1>
                    <p>Write some stuff</p>
                </section>
                <section>
                    <h1 style={headingStyles}>Why Hua</h1>
                    <p>Grid goes here</p>
                </section>
            </main>
        </Layout>
    );
}

export const pageQuery = graphql`
    query {
        allWpPost(filter: { date: { gte: "2021" } }) {
            edges {
                node {
                    id
                    content
                }
            }
        }
    }
`;
