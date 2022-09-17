import { Stack } from '@mui/material'
import { NavBar } from '../../components/nav-bar'
import { CollegePlace } from '../../components/collegePlaces'
import { Footer } from '../../components/footer'

export function CollegePlaces() {
  return (
    <Stack sx={{ direction: 'rtl', fontFamily: 'IranSans !important' }}>
      <NavBar />
      <CollegePlace />
      <Footer />
    </Stack>
  )
}
