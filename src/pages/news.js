import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { header } from "../styles/news.module.css";

const pageStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "10rem",
    marginTop: "5rem",
};

const titleStyle = {
    marginTop: "5rem",
    marginBottom: "5rem",
};

const containerStyles = {
    padding: "10rem",
    backgroundColor: "#414042",
};

const posts = ({ data }) => {
    return (
        <Layout pageTitle="Posts" style={pageStyle}>
            <h1 style={titleStyle}>Hello From News Posts (2021 only)</h1>
            <container style={containerStyles}>
                <div className={header}>
                    {data.allWpPost.nodes.map((node) => (
                        <div>
                            <p>{node.title}</p>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: node.excerpt,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </container>
        </Layout>
    );
};

export default posts;

export const pageQuery = graphql`
    query LatestPosts {
        allWpPost(filter: { date: { gte: "2021" } }) {
            nodes {
                id
                content
                excerpt
            }
        }
    }
`;
