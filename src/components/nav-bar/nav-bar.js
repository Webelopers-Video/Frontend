import { Box, Button, Stack } from '@mui/material'

const items = ['خانه', 'ویدیوهای آموزشی', 'رویدادها', 'بلاگ', 'گالری', 'امتحانات و تمارین', 'اساتید']

export function NavBar() {
  return <Stack>
    <Stack>
      {items.map(() => <Button />)}
    </Stack>
    <Stack>
      <Button>ورود|ثبت‌نام</Button>
      <Box>
        <img src='/assets/ssc.png' />
      </Box>
    </Stack>
  </Stack>

}