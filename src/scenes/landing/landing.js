import { Stack } from '@mui/material'
import { NavBar } from '../../components/nav-bar'
import { Banners } from '../../components/banners'
import { Events } from '../../components/events'
import { About } from '../../components/about'
import { Members } from '../../components/members'
import { Footer } from '../../components/footer'

export function Landing() {
  return (
    <Stack>
      <NavBar />
      <Banners />
      <Events />
      <About />
      <Members />
      <Footer />
    </Stack>
  )
}
