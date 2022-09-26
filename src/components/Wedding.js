import * as React from 'react'
import styled from '@emotion/styled'
import CardWedding from './CardWedding'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export default function Wedding({ title, place, adress, date, time }) {
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
    </Wrapper>
  )
}
