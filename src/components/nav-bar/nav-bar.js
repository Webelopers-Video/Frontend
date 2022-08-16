import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { EnterIcon } from '../icons/enter'

const items = [
  'خانه',
  'ویدیوهای آموزشی',
  'رویدادها',
  'بلاگ',
  'گالری',
  'امتحانات و تمارین',
  'اساتید',
]

export function NavBar() {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ height: '99px', bgcolor: '#000328', p: '0 128px 0 141px' }}
    >
      <Stack flexDirection="row">
        {items.map(item => (
          <Button
            sx={{
              color: 'white',
              fontWeight: 400,
              fontSize: '24px',
            }}
          >
            {item}
          </Button>
        ))}
      </Stack>
      <Stack flexDirection="row">
        <Button
          sx={{
            color: 'white',
            width: '167px',
            height: '49px',
            border: '1px solid #EDEDED',
            borderRadius: '8px',
            fontWeight: 400,
            fontSize: '16px',
          }}
          startIcon={<EnterIcon />}
        >
          ورود | ثبت‌نام
        </Button>
        <Box sx={{ width: '119px', height: '57px', marginRight: '20px' }}>
          <img
            style={{ width: '100%', height: '100%' }}
            src="/assets/ssc.png"
          />
        </Box>
      </Stack>
    </Stack>
  )
}
