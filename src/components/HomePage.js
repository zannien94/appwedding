import * as React from 'react'
import { Typography, Stack } from '@mui/material'

export default function HomePage() {
  return (
    <Stack
      display='flex'
      justifyContent='flex-end'
      height='100%'
      padding=' 0 0 24px 24px'
    >
      <Typography
        variant='h1'
        color='white'
        // marginBottom='40px'
        // marginLeft='20px'
        sx={{
          fontWeight: '500',
          fontSize: '80px',
          fontFamily: 'Radley',
          fontStyle: 'italic',
          letterSpacing: '-0.01em',
          lineHeight: '80px',
          textShadow: '0px 0px 8.93849px rgba(0, 0, 0, 0.25)',
        }}
      >
        Darek & Żaneta
      </Typography>
    </Stack>
  )
}
