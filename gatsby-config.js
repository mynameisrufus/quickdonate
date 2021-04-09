'use strict'

module.exports = {
  siteMetadata: {
    title: 'Quick Donate',
    description: 'Quickly donate directly to your local charity.',
    keywords: 'donate, charity',
    siteUrl: 'https://quickdonate.org.nz',
    author: {
      name: 'Rufus Post',
      url: 'https://github.com/mynameisrufus/',
      email: 'rufuspost@gmail.com'
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
            link: 'https://transact.polipay.co.nz/paynow/kus21002145ozt',
            type: 'currency',
            amount: 5
          },
          {
            id: 'a31fe023-2d3b-497d-af4d-95c54297a74b',
            link: 'https://transact.polipay.co.nz/paynow/kke21232145uoy',
            type: 'currency',
            amount: 10
          },
          {
            id: '01f93cb7-697c-4064-a297-e4c18ac5f907',
            link: 'https://transact.polipay.co.nz/paynow/xet21272143fvt',
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
