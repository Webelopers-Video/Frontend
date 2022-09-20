import { Button as MUIButton } from '@mui/material'

export function Button({
  width,
  height,
  borderRadius,
  fontSize,
  children,
  onClick,
  variant,
}) {
  return (
    <MUIButton
      sx={{
        border: '2px solid #CBCBCB',
        borderRadius,
        width,
        height,
        color: variant === 'contained' ? '#06234E' : 'white',
        fontSize,
        fontWeight: '500',
        backgroundColor:
          variant === 'contained'
            ? 'white'
            : variant === 'outlined'
            ? null
            : null,
      }}
      onClick={onClick}
    >
      {children}
    </MUIButton>
  )
}

Button.defaultProps = {
  borderRadius: '73px',
  width: '277px',
  height: '74px',
  fontSize: '32px',
}
