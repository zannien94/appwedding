import * as React from 'react'
import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
`
const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  gap: 20px;
  @media screen and (min-width: 601px) {
    flex-direction: row;
    width: 100%;
  }
`

const SCardContent = styled.div`
  position: absolute;
  top: 0;
  background: rgba(255, 255, 255, 0.5);
  color: black;
  height: 100%;
  padding: 20px;
  @media screen and (min-width: 601px) {
    position: static;
    background: none;
    height: auto;
  }
`

export default function Witness() {
  return (
    <Wrapper>
      <WrapperCard>
        <Card
          sx={{
            maxWidth: 320,
            maxHeight: 260,
            '@media (min-width: 601px)': {
              maxWidth: 400,
              maxHeight: 550,
            },
          }}
        >
          <CardActionArea sx={{ position: 'relative' }}>
            <CardMedia
              component='img'
              height='370'
              image='/images/agata.jpeg'
              alt='agata'
            />
            <SCardContent>
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
            </SCardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 320,
            maxHeight: 260,
            '@media (min-width: 601px)': {
              maxWidth: 400,
              maxHeight: 550,
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component='img'
              height='370'
              image='/images/kuba2.jpeg'
              alt='kuba'
            />
            <SCardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Kuba
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Kubę znam od ponad 10 lat. Naszą wspólną pasją są motocykle,
                dzięki której udało nam się stworzyć custom Hondy CM400T mojego
                projektu.
              </Typography>
            </SCardContent>
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
          fontSize: '20px',
          fontFamily: 'Radley',
          fontStyle: 'italic',
          letterSpacing: '-0.01em',
          lineHeight: '30px',
          textShadow: '0px 0px 8.93849px rgba(0, 0, 0, 0.25)',
          '@media (min-width: 601px)': {
            fontSize: '30px',
          },
        }}
      >
        Idź śmiało przez życie, mniej wesołą minkę! <br />
        Chwyć szczęście za rogi i duś jak cytrynkę!
      </Typography>
    </Wrapper>
  )
}
