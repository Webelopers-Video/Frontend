import { Box, Button, Stack, styled } from '@mui/material'
import { ContainedButton } from '../../common/buttons'
import { EnterIcon } from '../icons'

const items = [
  'خانه',
  'ویدیوهای آموزشی',
  'رویدادها',
  'بلاگ',
  'گالری',
  'امتحانات و تمارین',
  'اساتید',
]

const Container = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '99px',
  backgroundColor: '#000328',
  padding: '0 128px 0 141px',
}))

const NavbarItem = styled(Button)(() => ({
  color: 'white',
  fontWeight: 400,
  fontSize: '24px',
}))

export function NavBar() {
  return (
    <Container>
      <Stack flexDirection="row">
        {items.map(item => (
          <NavbarItem>{item}</NavbarItem>
        ))}
      </Stack>
      <Stack flexDirection="row">
        <ContainedButton
          width="167px"
          height="49px"
          borderRadius="8px"
          startIcon={<EnterIcon />}
        >
          ورود | ثبت‌نام
        </ContainedButton>
        <Box sx={{ width: '119px', height: '57px', marginRight: '20px' }}>
          <img
            style={{ width: '100%', height: '100%' }}
            src="/assets/ssc.png"
            alt="ssc"
          />
        </Box>
      </Stack>
    </Container>
  )
}
