import * as React from 'react'
import QRCodeGenerator from 'qrcode.react'
import styled from '@emotion/styled'

interface Props {
  value: string
}

const QRCodeContainer = styled.div`
  text-align: center;
`

const QRCode = ({ value }: Props): JSX.Element => (
  <QRCodeContainer>
    <QRCodeGenerator value={value} />
  </QRCodeContainer>
)

export default QRCode
