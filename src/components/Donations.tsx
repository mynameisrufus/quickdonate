import * as React from 'react'
import styled from '@emotion/styled'

import BuyMeCoffee from './BuyMeCoffee'

const StyledList = styled.div`
  list-style: none;
  padding: 0;
`

const StyledListItem = styled.div`
  text-align: center;
  margin: 0.8em;
  display: block;
  font-size: 2em;
  font-weight: bold;
  a {
    display: block;
    padding: 0.6em 0 0.6em 0;
    text-align: center;
    color: inherit;
    text-decoration: none;
  }
  svg {
    height: 2em;
    width: 2em;
  }
`

interface DonationsProps {
  color: string
  donations: Donation[]
}

const Donations: React.FC<DonationsProps> = ({ color, donations }) => (
  <StyledList>
    {donations.map(donation => {
      if (donation.type === 'coffee') {
        return (
          <StyledListItem key={donation.id}>
            <a href={donation.link} title={`Buy a volunteer a coffee for $${donation.amount}`}>
              <BuyMeCoffee color={color} />
            </a>
          </StyledListItem>
        )
      }

      if (donation.type === 'currency') {
        return (
          <StyledListItem key={donation.id}>
            <a href={donation.link} title={`Donate $${donation.amount}`}>
              ${donation.amount}
            </a>
          </StyledListItem>
        )
      }

      throw new Error(`donation type ${donation.type} not valid`)
    })}
  </StyledList>
)

export default Donations
