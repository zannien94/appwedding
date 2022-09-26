import * as React from 'react'
import { useNavigate } from 'react-router-dom'
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function Nawigation() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const navigate = useNavigate()
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
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
            label='Item One'
            {...a11yProps(0)}
            // onClick={() => navigate('/')}
          />
          <Tab
            sx={{ color: 'white' }}
            label='Ślub'
            {...a11yProps(1)}
            onClick={() => navigate('wedding')}
          />
          <Tab
            sx={{ color: 'white' }}
            label='Świadkowie'
            {...a11yProps(2)}
            onClick={() => navigate('witness')}
          />
          <Tab
            sx={{ color: 'white' }}
            label='Kontakt'
            {...a11yProps(2)}
            onClick={() => navigate('contact')}
          />
        </Tabs>
      </Box>
    </Box>
  )
}
