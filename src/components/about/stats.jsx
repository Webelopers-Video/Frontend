import { Divider, Stack, styled, Typography } from '@mui/material'

const items = [
  { number: '۱۱۱', label: 'دانشجو' },
  { number: '۱۱۱', label: 'هیئت علمی' },
  {
    number: '۱۱۱',
    label: 'فارغ‌التحصیل',
  },
  { number: '۱۱۱', label: 'ثبت اختراع' },
  { number: '۱۱۱', label: 'مقاله پژوهشی' },
]

const Container = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'absolute',
  width: '1494px',
  backgroundColor: '#FFFFFF',
  padding: '0 168px',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '40px',
  bottom: '-41px',
  left: 'calc(50% - 747px)',
  height: '244px',
}))

export function Stats() {
  return (
    <Container>
      {items.map(({ number, label }) => (
        <Stack alignItems="center">
          <Typography fontSize="64px" fontWeight="500" color="#003E84">
            {number}
          </Typography>
          <Divider flexItem sx={{ height: '4px', bgcolor: '#BA1200' }} />
          <Typography fontSize="32px" fontWeight="500" color="#004188">
            {label}
          </Typography>
        </Stack>
      ))}
    </Container>
  )
}
