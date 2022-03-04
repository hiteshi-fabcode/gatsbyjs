require("dotenv").config()
// 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
module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
        title: "MySite"
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options:{
                name: `blog`,
                path: `${__dirname}/blog`,
            }
        },
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-source-shopify",
            options: {
                password: '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',
                storeUrl: 'hiteshitestapp.myshopify.com',
            },
        }
    ]
}