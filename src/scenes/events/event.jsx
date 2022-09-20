import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Footer } from '../../components/footer'
import { NavBar } from '../../components/nav-bar'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { TitleIcon } from '../../components/events/title-icon'
import { Button } from '../../common/buttons/button'

const Event = () => {
  const event = {
    title: 'عنوان رویداد',
    description:
      '.......................................................................................................................................................................................................',
    startDate: '۱۴۰۱/۰۶/۲۷',
    startTime: '۱۲:۰۰',
    website: 'www.datadays.ir',
    signup: 'www.datadays.ir/signin',
    logo: 'https://random.imagecdn.app/500/500',
    pics: [
      'https://random.imagecdn.app/500/500',
      'https://random.imagecdn.app/500/500',
    ],
  }
  return (
    <Stack
      sx={{
        direction: 'rtl',
        fontFamily: 'IranSans !important',
        color: 'white',
      }}
    >
      <NavBar />
      {/* TODO title goes here  */}
      <Stack
        padding="3%"
        margin="5% 15%"
        borderRadius="10px"
        sx={{
          background: 'linear-gradient(180deg, #000328 0%, #00458E 100%);',
        }}
      >
        <Container sx={{ display: 'flex', gap: 5 }}>
          <Stack width={'50%'}>
            <Typography fontSize={56}>{event.title}</Typography>
            <Typography fontSize={32} sx={{ wordWrap: 'break-word' }}>
              {event.description}
            </Typography>
          </Stack>
          <Stack gap={3} width={'50%'}>
            <Container sx={{ textAlign: 'center' }}>
              <img
                style={{ borderRadius: '5px' }}
                src={event.logo}
                width="300px"
                height="250px"
              />
            </Container>
            <Typography fontSize={32}>شروع ثبت نام :</Typography>
            <TitleIcon Icon={CalendarTodayIcon}>{event.startDate}</TitleIcon>
            <TitleIcon Icon={AccessTimeIcon}>{event.startTime}</TitleIcon>
            <Container sx={{ display: 'flex', gap: 5 }}>
              <Button variant="outlined">سایت رویداد</Button>
              <Button variant="contained">ثبت نام</Button>
            </Container>
          </Stack>
        </Container>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 5,
            padding: 10,
          }}
        >
          {event.pics.map(pic => (
            <img style={{ borderRadius: '5px', width: '100%' }} src={pic} />
          ))}
        </Container>
      </Stack>

      <Footer />
    </Stack>
  )
}

export default Event
