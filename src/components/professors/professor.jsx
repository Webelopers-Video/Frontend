import {Grid, Stack, styled, Typography } from '@mui/material'
import { ContainedButton } from '../../common/buttons'
import {ProfessorCard} from './card'

const items = [
  { name: 'استاد اول', description: 'توضیحات کوتاه' },
  { name: 'استاد دوم', description: 'توضیحات کوتاه' }, 
  { name: 'استاد سوم', description: 'توضیحات کوتاه' }, 
  { name: 'استاد چهارم', description: 'توضیحات کوتاه' }, 
  { name: 'استاد پنجم', description: 'توضیحات کوتاه' }, 
  { name: 'استاد ششم', description: 'توضیحات کوتاه' }, 
  { name: 'استاد هفتم', description: 'توضیحات کوتاه' },
  { name: 'استاد هشتم', description: 'توضیحات کوتاه' },
]

const Container = styled(Stack)(() => ({
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  padding:'80px 300px 40px 300px'
}))

export function Professor() {
  return (
    <Container>
         <Grid container 
         spacing={12} 
         alignItems='center' 
         justifyContent='center'
         padding='0 0 45px 0'>
      {items.map(({ name, description }) => (
          <Grid container item xs={4} spacing={0}>
          <ProfessorCard name={name} description={description} />
        </Grid>  
      ))}
      </Grid>
      
       <ContainedButton><Typography color="#003E84">
            بیشتر
          </Typography></ContainedButton>
    </Container>
  )
}
