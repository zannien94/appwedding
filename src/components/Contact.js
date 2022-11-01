import React from 'react'
import styled from '@emotion/styled'
import { Typography, Stack } from '@mui/material'

const StyleBox = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px;
`
const Contact = () => {
  return (
    <Stack display='flex' justifyContent='center' height='100%'>
      <StyleBox>
        <Typography
          fontWeight='600'
          letterSpacing={2}
          variant='h4'
          color='white'
          marginBottom={2}
        >
          Kontakt
        </Typography>
        <Typography
          fontWeight='400'
          letterSpacing={2}
          variant='h6'
          color='white'
        >
          Żaneta: 698 559 688
        </Typography>
        <Typography
          fontWeight='400'
          letterSpacing={2}
          variant='h6'
          color='white'
        >
          Darek: 514 772 497
        </Typography>
      </StyleBox>
    </Stack>
  )
}

export default Contact
