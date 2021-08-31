module.exports = {
    siteMetadata: {
        siteUrl: "https://hua.com.sg/",
        title: "Hua Language Centre",
    },
    plugins: [
        {
            resolve: "gatsby-source-wordpress",
            options: {
                url: "https://hua.com.sg/graphql",
            },
        },
        "gatsby-plugin-styled-components",
        "gatsby-plugin-fontawesome-css",
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-102583850-1",
            },
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-material-ui",
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
    ],
};
