import { Box, Stack, styled, Typography } from '@mui/material'
import { InstagramIcon, LinkedinIcon, TelegramIcon, TwitterIcon } from '../icons'


const Container = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#000329',
  padding: '0 142px 0 126px',
  height: '243px',
  marginTop: '254px',
}))

const StyledImage = styled('img')(() => ({
  width: '100%',
  height: '100%',
}))

const SocialIconContainer = styled(Box)(() => ({
  width: '32px',
  height: '32px',
}))

export function Footer() {
  return (
    <Container>
      <Stack flexDirection="row" alignItems="center" sx={{ height: '107px' }}>
        <Box sx={{ width: '222px' }}>
          <StyledImage src="/assets/ssc.png" alt="ssc" />
        </Box>
        <Box sx={{ width: '107px', marginRight: '28px' }}>
          <StyledImage src="/assets/sharif.png" alt="sharif" />
        </Box>
      </Stack>
      <Stack
        sx={{ height: '100%' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          sx={{ height: '100%', marginTop: '23px' }}
          justifyContent="space-between"
        >
          <Typography fontSize="24px" fontWeight="500" color="#FFFFFF">
            تماس با ما
          </Typography>
          <Typography fontSize="24px" fontWeight="500" color="#FFFFFF">
            شبکه‌های اجتماعی:
          </Typography>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            sx={{ width: '144px' }}
          >
            {[
              <TelegramIcon />,
              <TwitterIcon />,
              <LinkedinIcon />,
              <InstagramIcon />,
            ].map(icon => (
              <SocialIconContainer>{icon}</SocialIconContainer>
            ))}
          </Stack>
        </Stack>
        <Typography
          sx={{ marginTop: '37px' }}
          fontSize="16px"
          fontWeight="300"
          color="#757575"
        >
          کلیه‌ی حقوق این سایت متعلق به انجمن علمی دانشجویی دانشکده مهندسی
          کامپیوتر دانشگاه صنعتی شریف است
        </Typography>
      </Stack>
      <Stack>
        <Stack>
          <Box>
            <img />
          </Box>
          <Typography></Typography>
        </Stack>
        <Stack>
          <Box>
            <img />
          </Box>
          <Typography></Typography>
        </Stack>
        <Stack>
          <Box>
            <img />
          </Box>
          <Typography></Typography>
        </Stack>
        <Stack>
          <Box>
            <img />
          </Box>
          <Typography></Typography>
        </Stack>
      </Stack>
    </Container>
  )
}
