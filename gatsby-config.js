module.exports = {
    siteMetadata: {
        title: `Welcome`,
        siteUrl: `https://mjb.dev`,
        description: `...`
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Open Sans`,
                        variants: [`300`, `400`, `700`]
                    }
                ]
            }
        }
    ]
};
