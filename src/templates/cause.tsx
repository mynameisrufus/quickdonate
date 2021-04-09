import * as React from 'react'
import styled from '@emotion/styled'

import SVG from '../components/SVG'
import Page from '../components/Page'
import Container from '../components/Container'
import Donations from '../components/Donations'
import IndexLayout from '../layouts'

const StyledHeader = styled.h1`
  text-align: center;
`

const StyledSubHeader = styled.h3`
  text-align: center;
`

const CausePage = ({ pageContext }) => (
  <IndexLayout>
    <Page>
      <Container>
        <StyledHeader>
          <SVG name={pageContext.cause.image} />
        </StyledHeader>
        <StyledSubHeader>Donate to {pageContext.cause.name}</StyledSubHeader>
        <Donations donations={pageContext.cause.donations} />
      </Container>
    </Page>
  </IndexLayout>
)

export default CausePage
