import * as React from 'react'
import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
`
const WrapperCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px;
`
export default function Witness() {
  return (
    <Wrapper>
      <WrapperCard>
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
                Nasza wspólna droga rozpoczeła się w Radawcu, na praktykach,
                gdzie wspólnie podzielałyśmy pasję do przepisywania
                chronometraży. Po długiej przerwie dzięki przypadkowemu
                spotkaniu w 517 kontakt się wznowił i tak dzięki anielskiej
                cierpliwość Agaty trwa do dziś.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400, maxHeight: 550 }}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='370'
              image='/images/kuba2.jpeg'
              alt='kuba'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Kuba
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Kubę znam od ponad 10 lat. Naszą wspólną pasją są motocykle,
                dzięki której udało nam się stworzyć custom Hondy CM400T mojego
                projektu.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </WrapperCard>

      <Typography
        variant='h5'
        color='white'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px',
          fontWeight: '500',
          fontSize: '30px',
          fontFamily: 'Radley',
          fontStyle: 'italic',
          letterSpacing: '-0.01em',
          lineHeight: '30px',
          textShadow: '0px 0px 8.93849px rgba(0, 0, 0, 0.25)',
        }}
      >
        Idź śmiało przez życie, mniej wesołą minkę! <br />
        Chwyć szczęście za rogi i duś jak cytrynkę!
      </Typography>
    </Wrapper>
  )
}
