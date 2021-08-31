import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styles from "../styles/home.module.css";

const posts = ({ data }) => {
    return (
        <Layout pageTitle="Posts">
            <h1 className={styles.header}>Hello From Posts</h1>
            {data.allWpPost.nodes.map((node) => (
                <div>
                    <p>{node.title}</p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: node.content,
                        }}
                    />
                </div>
            ))}
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
            }
        }
    }
`;
