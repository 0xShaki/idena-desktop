import React from 'react'
import {Row, Col, Text} from '../atoms'
import theme from '../../theme'

export default ({chat}) => (
  <Row align="center">
    <Col w={3}>
      <div>🤖</div>
    </Col>
    <Col w={9}>
      <Text>{chat.sender.fullName}</Text>
      <br />
      <Text color={theme.colors.muted}>{chat.messages[0].text}</Text>
    </Col>
    <style jsx>{`
      div {
        background: ${theme.colors.gray};
        border-radius: 8px;
        padding: 0.5em;
        margin: 0.5em;
        margin-right: 1em;
        margin-left: 0;
        text-align: center;
      }
    `}</style>
  </Row>
)
