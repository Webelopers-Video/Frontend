import { Box, Stack, styled, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { OutlinedButton } from '../../common/buttons'

const Container = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)',
  borderRadius: '8px',
  padding: '43px 75px 44px 84px',
  boxSizing: 'border-box',
  marginBottom: '48px',
}))

const EventImageFrame = styled(Box)(() => ({
  width: '259px',
  height: '197px',
  backgroundColor: '#D9D9D9',
  borderRadius: '4px',
}))

export function EventItem({ eventImage }) {
  const navigate = useNavigate()
  const event = {
    name: 'datadays'
  }
  return (
    <Container>
      <Stack>
        <Typography fontSize="16px" fontWeight="700" color="#757575">
          مهلت ثبت‌نام تا:
        </Typography>
        <Typography fontSize="64px" fontWeight="500" color="#BA1200">
          ۲۵
        </Typography>
        <Typography fontSize="32px" fontWeight="500" color="#303030">
          شهریور ۱۴۰۱
        </Typography>
        <Typography fontSize="24px" fontWeight="400" color="#757575">
          دوشنبه
        </Typography>
      </Stack>
      <EventImageFrame>
        <img src={eventImage} alt="event-image" />
      </EventImageFrame>
      <Stack sx={{ width: '500px' }}>
        <Typography fontSize="32px" fontWeight="500" color="#06234E">
          عنوان رویداد
        </Typography>
        <Typography fontSize="24px" fontWeight="400" color="#303030">
          توضیحات کوتاهی از رویداد(بیشینه ۲ خط بشه و تو همین قاب جا شه)
        </Typography>
      </Stack>
      <Stack flexDirection="row" alignItems="flex-end">
        <OutlinedButton width="270px" height="52px" fontSize="24px" onClick={() => navigate(`/events/${event.name}`)}>
          اطلاعات بیشتر و ثبت‌نام
        </OutlinedButton>
      </Stack>
    </Container>
  )
}
