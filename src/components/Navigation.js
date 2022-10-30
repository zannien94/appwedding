import { useState, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    ></div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

const getPathIndex = (name) => {
  return { '/': 0, menu: 1, witness: 2, contact: 3 }[name] ?? 0
}

export default function Nawigation() {
  const navigate = useNavigate()
  const { pathname } = useLocation() || {}
  const pathIndex = getPathIndex(pathname.split('/')[1])
  const [value, setValue] = useState(pathIndex)
  const ref = useRef(null)
  const handleChange = (_, newValue) => setValue(newValue)

  return (
    <Box sx={{ width: '100%' }} ref={ref}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: 'white',
            },
            '&& button': {
              color: 'white',
            },
          }}
        >
          <Tab
            sx={{ color: 'white' }}
            label='Ślub'
            onClick={() => navigate('/')}
          />
          <Tab
            sx={{ color: 'white' }}
            label='Menu'
            onClick={() => navigate('menu')}
          />
          <Tab
            sx={{ color: 'white' }}
            label='Świadkowie'
            onClick={() => navigate('witness')}
          />
          <Tab
            sx={{ color: 'white' }}
            label='Kontakt'
            onClick={() => navigate('contact')}
          />
        </Tabs>
      </Box>
    </Box>
  )
}
