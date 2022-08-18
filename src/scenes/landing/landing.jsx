import { Stack } from '@mui/material'
import { NavBar } from '../../components/nav-bar'
import { Events } from '../../components/events'
import { About } from '../../components/about'
import { Members } from '../../components/members'
import { Footer } from '../../components/footer'

export function Landing() {
  return (
    <Stack sx={{ direction: 'rtl', fontFamily: 'IranSans !important' }}>
      <NavBar />
      <Events />
      <About />
      <Members />
      <Footer />
    </Stack>
  )
}
