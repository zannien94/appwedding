import * as React from 'react'
import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 18px;
`
export default function Witness() {
  return (
    <Wrapper>
      <Card sx={{ maxWidth: 400, maxHeight: 550 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='370'
            image='/images/agata.jpeg'
            alt='agata'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Agata
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 400, maxHeight: 550 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='370'
            image='/images/kuba.jpeg'
            alt='kuba'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Kuba
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Wrapper>
  )
}
