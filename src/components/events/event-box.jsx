import { Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { OutlinedButton } from '../../common/buttons'
import { EventItem } from './event-item'

export const EventBox = ({ name }) => {
  return (
    <Stack >
      <Typography padding="20px 123px 20px 0" fontSize="64px" fontWeight="400" color="#031127">
        {name}
      </Typography>
      <Stack sx={{ p: '0 246px 54px' }}>
        <Stack>
          <EventItem />
          <EventItem />
          <EventItem />
        </Stack>
        <Container sx={{ textAlign: 'center' }}>
          <OutlinedButton>بیشتر</OutlinedButton>
        </Container>
      </Stack>
    </Stack>
  )
}
