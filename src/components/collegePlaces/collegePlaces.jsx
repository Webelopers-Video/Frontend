import { styled, Typography } from '@mui/material'
import { Button } from '@mui/material'
import PhotoAlbum from 'react-photo-album'
import './style.css'

const photos = [
  {
    src: '/assets/1.png',
    width: 300,
    height: 800,
  },
  {
    src: '/assets/1.png',
    width: 1600,
    height: 500,
  },
  {
    src: '/assets/1.png',
    width: 100,
    height: 500,
  },
  {
    src: '/assets/1.png',
    width: 800,
    height: 400,
  },
  {
    src: '/assets/1.png',
    width: 350,
    height: 500,
  },
  {
    src: '/assets/1.png',
    width: 200,
    height: 250,
  },
]

const StyledButton = styled(Button)(({}) => ({
  border: '1px solid #CBCBCB',
  width: '181px',
  height: '46px',
  borderRadius: '73px',
  fontSize: '16px',
  fontWeight: '600',
  marginTop: '25px',
}))

export function CollegePlace() {
  return (
    <>
      <div className="header">
        <h1>📷 مکان های دانشکده</h1>
      </div>

      <div className="box">
        <PhotoAlbum layout="rows" photos={photos} />
        <div className="centerbutton">
          <StyledButton>
            <Typography color="#003E84">بیشتر</Typography>
          </StyledButton>
        </div>
      </div>
    </>
  )
}
