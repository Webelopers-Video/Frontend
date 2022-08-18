import { Stack, Typography } from '@mui/material'
import { EventItem } from './event-item'
import { OutlinedButton } from '../../common/buttons'

export function Events() {
  return (
    <Stack sx={{ p: '0 246px 224px' }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: '84px 0 56px' }}
      >
        <Typography fontSize="64px" fontWeight="400" color="#031127">
          رویدادهای دانشکده
        </Typography>
        <OutlinedButton width="277px" height="74px">
          همه رویدادها
        </OutlinedButton>
      </Stack>
      <Stack>
        <EventItem />
        <EventItem />
        <EventItem />
      </Stack>
    </Stack>
  )
}
