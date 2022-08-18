import { Button } from '@mui/material'

export function ContainedButton({ borderRadius, width, height, children, startIcon }) {
  return (
    <Button
      startIcon={startIcon}
      sx={{
        width,
        height,
        border: '1px solid #CBCBCB',
        borderRadius,
        fontSize: '16px',
        fontWeight: '600',
        color: '#FFFFFF',
        marginRight: '33px',
      }}
    >
      {children}
    </Button>
  )
}

ContainedButton.defaultProps = {
  width: '181px',
  height: '57px',
  borderRadius: '73px',
  startIcon: null,
}
