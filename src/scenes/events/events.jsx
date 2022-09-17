import { Stack } from '@mui/material'
import React from 'react'
import { EventBox } from '../../components/events'
import { Footer } from '../../components/footer'
import { NavBar } from '../../components/nav-bar'

const typeOfEvents = [
  {
    name: 'رویدادهای پیشرو',
  },
  {
    name: 'رویدادهای فعلی',
  },
  {
    name: 'دیگر رویدادها',
  },
]

export const Events = () => {
  return (
    <Stack sx={{ direction: 'rtl', fontFamily: 'IranSans !important' }}>
      <NavBar />
      {/* TODO title goes here  */}
      {typeOfEvents.map(({ name }) => (
        <EventBox name={name} />
      ))}
      <Footer />
    </Stack>
  )
}
