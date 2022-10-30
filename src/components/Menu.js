import React, { useRef, useState } from 'react'
import styled from '@emotion/styled'
import { Typography, Stack, Box } from '@mui/material'
import { Button } from '@mui/material'

const StyleBox = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px;
  overflow: hidden;
  min-height: 100%;
`

const Menu = () => {
  const [state, setState] = useState(0)
  const boxRef = useRef(null)

  const onColdClick = () => {
    if (boxRef) {
      setState(boxRef.current.clientHeight)
    }
  }
  const onHotClick = () => {
    setState()
  }
  return (
    <Stack display='flex' justifyContent='center' height='100%'>
      <StyleBox>
        <Typography
          fontWeight='600'
          letterSpacing={2}
          variant='h3'
          color='white'
        >
          Menu
        </Typography>
        <Stack overflow='hidden' height='100%' minHeight='100vh'>
          <Box
            minHeight='100%'
            marginTop={`-${state}px`}
            sx={{ transition: '1s' }}
          >
            <Typography
              fontWeight='600'
              letterSpacing={2}
              variant='h5'
              color='white'
            >
              Dania gorące:
            </Typography>
            <Typography
              fontWeight='400'
              letterSpacing={2}
              variant='h6'
              color='white'
            >
              Rosół z makaronem <br />
              Roladka drobiowa podana z sałatą, ziemniaki pure i sos borowikowy
              <br />
              Deser puchar lodowy <br />
              Półmisek biesiadny: żeberka, golonka, szaszłyk, udka, danie
              serwowane z frytkami <br />
              Strogonof lub gulasz Płonące udzće wieprzowe serwowane przy
              biesiadnikach
              <br /> Barszczyk z krokietem
            </Typography>
            <Button onClick={onColdClick}>Przekąski zimne</Button>
          </Box>

          <Box minHeight='100%' ref={boxRef}>
            <Typography
              fontWeight='600'
              letterSpacing={2}
              variant='h5'
              color='white'
            >
              Przekąski zimne
            </Typography>
            <Typography
              fontWeight='400'
              letterSpacing={2}
              variant='h6'
              color='white'
            >
              Mięsa pieczone
              <br />
              Mięsa wędzone
              <br />
              Śledz tradycyjny z cebulką
              <br />
              Roladka z łososia wędzonego , rukoli, twarożku
              <br />
              Kęski z kurczaka w sezamie
              <br />
              Jajko w majonezie ze szczypiorkiem
              <br />
              Tatar
              <br />
              Sałatka grecka
              <br />
              Sałatka środziemnomorska
              <br />
              Sałatka cezar
              <br />
              Mozarella z pomodorami
              <br />
              Roladka z grilowanej cukinii
              <br />
            </Typography>
            <Button onClick={onHotClick}>Dania gorące</Button>
          </Box>
        </Stack>
      </StyleBox>
    </Stack>
  )
}

export default Menu
