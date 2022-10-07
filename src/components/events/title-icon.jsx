import { Container, Typography } from '@mui/material'
import React from 'react'

export const TitleIcon = ({ children, Icon }) => {
  return (
    <Container sx={{ display: 'flex', gap: 3, justifyContent: 'end' }}>
      <Typography fontSize={32}>{children}</Typography>
      <Icon sx={{ fill: 'white', fontSize: 45 }} />
    </Container>
  )
}
