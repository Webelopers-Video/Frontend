import { Stack } from '@mui/material'
import { NavBar } from '../../components/nav-bar'
import { Professor } from '../../components/professors'
import { Footer } from '../../components/footer'

export function Professors() {
  return (
    <Stack sx={{ direction: 'rtl', fontFamily: 'IranSans !important' }}>
      <NavBar />
      <Professor />
      <Footer />
    </Stack>
  )
}
