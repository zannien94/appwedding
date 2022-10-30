import * as React from 'react'
import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import moment from 'moment'
import CardWedding from './CardWedding'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Time = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  bottom: 0;
`

const formatTime = (duration) => {
  const days = Math.floor(duration / (24 * 3600))
  let hours = Math.floor((duration / 3600) % 24)
  let minutes = Math.floor((duration % 3600) / 60)
  let seconds = duration % 60

  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  let nDays = days === 1 ? 'dzien' : 'dni'

  return `${days}${nDays}  ${hours}:${minutes}:${seconds}`
}

export default function Wedding() {
  const [time, setTime] = React.useState(0)

  React.useEffect(() => {
    const nov4 = new Date(Date.UTC(2022, 10, 4, 14, 0, 0))

    const timer = setInterval(() => {
      const sec = moment(nov4).diff(moment(), 'seconds')
      if (sec <= 0) {
        return clearInterval(timer)
      }
      setTime(moment(nov4).diff(moment(), 'seconds'))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Wrapper>
      <CardWedding
        title='Ceremonia ślubna'
        place='Urząd Stanu Cywilnego'
        adress='Rynek 1 20-111 Lublin'
        date='04.11.2022'
        time=' 15:00 - 15:30'
      />
      <CardWedding
        title='Przyjęcie ślubna'
        place='Dworek Jabłonna'
        adress='Jabłonna-Majątek 44 a, 23-114 Jabłonna-Majątek'
        date='04.11.2022'
        time=' 17:00 - 04:00'
      />
      <Time>
        <Card
          sx={{
            background: 'rgba(0,0,0,0.7)',
            margin: '0 auto',
            borderRadius: '16px',
            color: 'white',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span>Pozostalo:</span>
          {formatTime(time)}
        </Card>
      </Time>
    </Wrapper>
  )
}
