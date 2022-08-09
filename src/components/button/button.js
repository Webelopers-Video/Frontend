import { Button as MuiButton, styled } from '@mui/material'

const StyledButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary,
}))

export function Button() {
  return <StyledButton />
}
