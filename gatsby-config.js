'use strict'

module.exports = {
  siteMetadata: {
    title: 'gatsby-starter-typescript-plus',
    description: 'A starter kit for TypeScript-based Gatsby projects with sensible defaults.',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
    siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
    author: {
      name: 'Resi Respati',
      url: 'https://twitter.com/resir014',
      email: 'resir014@gmail.com'
    },
    causes: [
      {
        id: 'bdf32020-73c2-4cf8-bbe9-a12b1fb1f541',
        slug: '/cause/bdf32020-73c2-4cf8-bbe9-a12b1fb1f541',
        name: 'South Hokianga',
        organisation: 'St John',
        image: 'stjohn',
        colors: {
          primary: '#FEB913'
        },
        donations: [
          {
            id: 'b43e8eae-1bb5-47f6-8f8b-96a3c7449f0d',
            link: 'https://google.com',
            type: 'currency',
            amount: 5
          },
          {
            id: 'a31fe023-2d3b-497d-af4d-95c54297a74b',
            link: 'https://google.com',
            type: 'currency',
            amount: 10
          },
          {
            id: '01f93cb7-697c-4064-a297-e4c18ac5f907',
            link: 'https://google.com',
            type: 'coffee',
            amount: 4.5
          }
        ]
      }
    ]
  },
  plugins: [
		{
			resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/assets`
        }
      }
		},
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
