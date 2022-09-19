import { Container, Typography } from '@mui/material'
import React from 'react'

export const TitleIcon = ({ children, Icon }) => {
  return (
    <Container sx={{display: 'flex', gap: 1, justifyContent: 'end'}}>
      <Typography>{children}</Typography>
      <Icon sx={{ fill: 'white' }} />
    </Container>
  )
}
