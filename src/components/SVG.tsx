import * as React from 'react'

import Stjohn from '../assets/stjohn.svg'
import Buymecoffee from '../assets/buymecoffee.svg'

interface SVGProps {
  name: string
}

const SVG: React.FC<SVGProps> = ({ name }) => {
  if (name === 'stjohn') {
    return <Stjohn />
  }

  if (name === 'buymecoffee') {
    return <Buymecoffee />
  }

  return <svg />
}

export default SVG
