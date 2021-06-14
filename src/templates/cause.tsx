import * as React from 'react'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import Donations from '../components/Donations'
import IndexLayout from '../layouts'
import QRCode from '../components/QRCode'

const Header = styled.h1`
  text-align: center;
  padding: 1em 0 1em 0;
  background-color: ${props => props.colors.primary};
  color: ${props => props.colors.heading};
`

const CausePage = ({ pageContext }) => (
  <IndexLayout>
    <Header colors={pageContext.cause.colors}>Donate to {pageContext.cause.name}</Header>
    <Page>
      <Container>
        <Donations donations={pageContext.cause.donations} color={pageContext.cause.colors.primary} />
        <QRCode value={pageContext.causeUrl} />
      </Container>
    </Page>
  </IndexLayout>
)

export default CausePage
