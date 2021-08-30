import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

// styles
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
const paragraphStyles = {
    marginBottom: 48,
};
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
};
const listStyles = {
    marginBottom: 96,
    paddingLeft: 0,
};
const listItemStyles = {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
};

const linkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
};

const docLinkStyle = {
    ...linkStyle,
    listStyleType: "none",
    marginBottom: 24,
};

const descriptionStyle = {
    color: "#232129",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
};

const docLink = {
    text: "Documentation",
    url: "https://www.gatsbyjs.com/docs/",
    color: "#8954A8",
};

const badgeStyle = {
    color: "#fff",
    backgroundColor: "#088413",
    border: "1px solid #088413",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 4,
    padding: "4px 6px",
    display: "inline-block",
    position: "relative",
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
};

// markup
export default function IndexPage({ data }) {
    return (
        <Layout>
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
