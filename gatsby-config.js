module.exports = {
  siteMetadata: {
    title: `CovidThesis`,
    name: `CovidThesis`,
    siteUrl: `http://covidthesis.com`,
    description: `Supplement for Thesis: Travel Disruption during COVID-19`,
    hero: {
      heading: `Welcome to the interactive webpage for MSc. thesis: Travel Disruption during COVID-19.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/RebecaApostu/CovidThesis`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
