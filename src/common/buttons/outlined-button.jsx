import { Button } from '@mui/material'

export function OutlinedButton({ width, height, borderRadius, fontSize, children }) {
  return (
    <Button
      sx={{
        border: '2px solid #CBCBCB',
        borderRadius,
        width,
        height,
        color: '#06234E',
        fontSize,
        fontWeight: '500',
      }}
    >
      {children}
    </Button>
  )
}

OutlinedButton.defaultProps = {
  borderRadius: '73px',
  width: '277px',
  height: '74px',
  fontSize: '32px'
}
