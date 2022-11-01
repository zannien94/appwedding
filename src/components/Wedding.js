import * as React from 'react'
import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import moment from 'moment'
import CardWedding from './CardWedding'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
  @media screen and (min-width: 601px) {
    flex-direction: row;
    margin-top: 200px;
  }
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
        time=' 15:00'
        url='https://www.google.com/maps/place/Urz%C4%85d+Stanu+Cywilnego/@51.2477694,22.5664923,17z/data=!3m1!4b1!4m5!3m4!1s0x47225713c9bb53bd:0xf1ded2b87d356131!8m2!3d51.2477101!4d22.5679092'
      />
      <CardWedding
        title='Przyjęcie ślubne'
        place='Dworek Jabłonna'
        adress='Jabłonna-Majątek 44 a, 23-114 Jabłonna-Majątek'
        date='Zapraszamy :)'
        url='https://www.google.com/maps/place/Dworek+Jab%C5%82onna/@51.1062484,22.5845655,17z/data=!3m1!4b1!4m8!3m7!1s0x4722febc3cf1432d:0x38373bdae5d5d1ff!5m2!4m1!1i2!8m2!3d51.1062592!4d22.586726'
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
