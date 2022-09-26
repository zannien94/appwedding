import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from '@emotion/styled'
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import Wedding from './components/Wedding'
import Contact from './components/Contact'
import Witness from './components/Witness'

const Header = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url('/images/home.jpg');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  margin: 0;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Header>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/wedding' element={<Wedding />} />
        <Route path='/witness' element={<Witness />} />
      </Routes>
    </Header>
  )
}

export default App
