import { Stack, styled, Typography } from '@mui/material'
import { Stats } from '.'
import { ContainedButton } from '../../common/buttons'

const Container = styled(Stack)(() => ({
  background: 'linear-gradient(180deg, #000328 0%, #00458E 100%)',
  padding: '84px 0 376px 0',
  boxSizing: 'border-box',
  position: 'relative',
  borderRadius: '0 0 120px 120px',
}))

export function About() {
  return (
    <Container>
      <Stack flexDirection="row" sx={{ marginRight: '240px' }}>
        <Typography
          fontSize="64px"
          fontWeight="400"
          color="#FFFFFF"
          textAlign="center"
        >
          درباره دانشکده
          <br />
          مهندسی کامپیوتر
        </Typography>
        <Stack
          justifyContent="space-between"
          sx={{ margin: '0 189px 63px 0', height: '273px' }}
        >
          <Typography fontSize="32px" fontWeight="500" color="#FFFFFF">
            اینجا باید یه شعار یا یه جمله الهام‌آمیز بنویسید
          </Typography>
          <Typography fontSize="24px" fontWeight="400" color="#FFFFFF">
            اینجا هم یه توضیح ریزی بدید(بیشینه ۳ خط)
          </Typography>
          <ContainedButton width="181px" height="57px" borderRadius="73px">
            تاریخچه
          </ContainedButton>
        </Stack>
      </Stack>
      {/* TODO: Implement carousel here */}
      <Stats />
    </Container>
  )
}
