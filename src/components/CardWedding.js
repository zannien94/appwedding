import * as React from 'react'
import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import { Stack } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import AssuredWorkloadRoundedIcon from '@mui/icons-material/AssuredWorkloadRounded'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'

const WrapperTyporography = styled.div`
  display: flex;
  flex-direction: row;
`

export default function CardWedding({ title, place, adress, date, time, url }) {
  return (
    <Card
      sx={{
        maxWidth: '350px',
        background: 'rgba(0,0,0,0.7)',
        margin: '0 auto',
        borderRadius: '16px',
        color: 'white',
        padding: '16px',
      }}
      onClick={url ? () => window.open(url, '_blank') : undefined}
    >
      <CardActionArea>
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

            {time && (
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
            )}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
