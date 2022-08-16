import { Box, Button, Stack, Typography } from '@mui/material'

export function EventItem() {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      sx={{
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        padding: '43px 75px 44px 84px',
        boxSizing: 'border-box',
        marginBottom: '48px',
      }}
    >
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
      <Box
        sx={{
          width: '259px',
          height: '197px',
          bgcolor: '#D9D9D9',
          borderRadius: '4px',
        }}
      >
        <img alt="event-image" />
      </Box>
      <Stack sx={{ width: '500px' }}>
        <Typography fontSize="32px" fontWeight="500" color="#06234E">
          عنوان رویداد
        </Typography>
        <Typography fontSize="24px" fontWeight="400" color="#303030">
          توضیحات کوتاهی از رویداد(بیشینه ۲ خط بشه و تو همین قاب جا شه)
        </Typography>
      </Stack>
      <Stack flexDirection="row" alignItems="flex-end">
        <Button
          sx={{
            border: '2px solid #CBCBCB',
            borderRadius: '73px',
            width: '256px',
            height: '52px',
            color: '#06234E',
            fontSize: '24px',
            fontWeight: '500',
          }}
        >
          اطلاعات بیشتر و ثبت‌نام
        </Button>
      </Stack>
    </Stack>
  )
}
