import * as React from 'react'
import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import { Stack } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import AssuredWorkloadRoundedIcon from '@mui/icons-material/AssuredWorkloadRounded'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'

const WrapperTyporography = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
`
export default function CardWedding({ title, place, adress, date, time }) {
  return (
    <Card
      sx={{
        maxWidth: '350px',
        background: 'rgba(0,0,0,0.7)',
        margin: '0 auto',
        marginTop: '200px',
        borderRadius: '16px',
        color: 'white',
        padding: '16px',
      }}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image='/public/images/image.png'
          alt='image'
        />
        <CardContent>
          <Stack spacing={1}>
            <Typography gutterBottom variant='h5' component='div'>
              {title}
            </Typography>
            <WrapperTyporography>
              <AssuredWorkloadRoundedIcon sx={{ fontSize: '29px' }} />
              <Typography
                variant='h6'
                color='white'
                sx={{ marginLeft: '15px' }}
              >
                {place}
              </Typography>
            </WrapperTyporography>

            <WrapperTyporography>
              <LocationOnIcon sx={{ fontSize: '29px' }} />
              <Typography
                variant='h6'
                color='white'
                sx={{ marginLeft: '15px' }}
              >
                {adress}
              </Typography>
            </WrapperTyporography>

            <WrapperTyporography>
              <CalendarMonthIcon sx={{ fontSize: '29px' }} />
              <Typography
                variant='h6'
                color='white'
                sx={{ marginLeft: '15px' }}
              >
                {date}
              </Typography>
            </WrapperTyporography>

            <WrapperTyporography>
              <QueryBuilderIcon sx={{ fontSize: '29px' }} />
              <Typography
                variant='h6'
                color='white'
                sx={{ marginLeft: '15px' }}
              >
                {time}
              </Typography>
            </WrapperTyporography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}