import { Divider, Stack, Typography } from '@mui/material'

export function Stats() {
  return (
    <Stack>
      {[].map(() => (
        <Stack>
          <Typography></Typography>
          <Divider />
          <Typography></Typography>
        </Stack>
      ))}
    </Stack>
  )
}
