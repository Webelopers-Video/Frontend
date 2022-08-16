import { Button, Stack, Typography } from '@mui/material'
import { EventItem } from './event-item'

export function Events() {
  return (
    <Stack sx={{ p: '0 246px' }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: '84px 0 56px' }}
      >
        <Typography fontSize="64px" fontWeight="400" color="#031127">
          رویدادهای دانشکده
        </Typography>
        <Button
          sx={{
            border: '2px solid #CBCBCB',
            borderRadius: '73px',
            width: '277px',
            height: '74px',
            color: '#06234E',
            fontSize: '32px',
            fontWeight: '500',
          }}
        >
          همه رویدادها
        </Button>
      </Stack>
      <Stack>
        <EventItem />
        <EventItem />
        <EventItem />
      </Stack>
    </Stack>
  )
}
