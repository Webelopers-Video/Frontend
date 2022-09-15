import {
  Grid,
  CardContent,
  Card,
  Stack,
  styled,
  Typography,
  Divider,
  CardMedia,
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

const Container = styled(Stack)(() => ({
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  borderColor: '#247BA0',
}))

export function ProfessorCard({ name, description }) {
  return (
    <Container>
      <Card style={{ border: '1px solid  #003E84', overflow: 'visible' }}>
        <CardMedia
          style={{
            overflow: 'visible',
            direction: 'ltr',
            border: '1px solid  #003E84',
            marginRight: '22%',
            marginTop: '-25px',
            height: '65px',
            width: '55%',
          }}
          title="Contemplative Reptile"
        >
          <img
            alt=""
            src="/assets/1.png"
            style={{ margin: '8px 0 0 8px', height: '65px', width: '100%' }}
          />
        </CardMedia>
        <CardContent>
          <Typography fontSize="16px" color="#003E84" padding="0 15px 0 15px">
            {name}
          </Typography>
          <Typography fontSize="8px" color="#003E84">
            {description}
          </Typography>

          <Divider
            flexItem
            sx={{ height: '0.5px', bgcolor: '#003E84', margin: '5px 0 5px 0' }}
          />

          <Grid
            container
            direction="row-reverse"
            justifyContent="flex-start"
            alignItems="center"
          >
            <EmailIcon
              style={{ color: '#003E84', fontSize: '12px', marginRight: '4px' }}
            />
            <Typography fontSize="8px" color="#003E84">
              aaaaaaaaaa
            </Typography>
          </Grid>

          <Grid
            container
            direction="row-reverse"
            justifyContent="flex-start"
            alignItems="center"
          >
            <PhoneIcon
              style={{ color: '#003E84', fontSize: '12px', marginRight: '4px' }}
            />
            <Typography fontSize="8px" color="#003E84">
              9999999999
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}
