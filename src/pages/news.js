import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { header } from "../styles/news.module.css";

const pageStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    marginTop: "5rem",
};

const titleStyle = {
    marginBottom: "1rem",
};

const posts = ({ data }) => {
    return (
        <Layout pageTitle="Posts" style={pageStyle}>
            <h1 style={titleStyle}>Hello From Posts (2021 only)</h1>
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
