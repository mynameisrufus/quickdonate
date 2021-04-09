import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query CauseIndexQuery {
        site {
          siteMetadata {
            causes {
              slug
              name
            }
          }
        }
      }
    `}
    render={data => (
      <IndexLayout>
        <Page>
          <Container>
            {data.site.siteMetadata.causes.map(cause => {
              return <Link to={cause.slug}>{cause.name}</Link>
            })}
          </Container>
        </Page>
      </IndexLayout>
    )}
  />
)

export default IndexPage
