import React from "react";
import Layout from "../Components/Layout";
import { graphql } from "gatsby";

const posts = ({ data }) => {
    return (
        <Layout>
            <title>Posts</title>
            <div>Hello From Posts</div>
            {data.allWpPost.nodes.map((node) => {
                <div>
                    <p>{node.title}</p>
                    <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>;
            })}
        </Layout>
    );
};

export default posts;

export const pageQuery = graphql`
    query {
        allWpPost(sort: { fields: [date] }) {
            nodes {
                title
                excerpt
                slug
            }
        }
    }
`;
