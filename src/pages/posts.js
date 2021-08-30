import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const posts = ({ pageQuery }) => {
    return (
        <Layout>
            <title>Posts</title>
            <div>Hello From Posts</div>
            {pageQuery?.allWpPost?.nodes?.map((node) => {
                <div>
                    <p>{node.title}</p>
                    <div dangerouslySetInnerHTML={{ __html: node.content }} />
                </div>;
            })}
        </Layout>
    );
};

export default posts;

export const pageQuery = graphql`
    query {
        allWpPost {
            nodes {
                id
                title
                date
                excerpt
                content
            }
        }
    }
`;
