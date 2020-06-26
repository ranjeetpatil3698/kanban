import React from 'react'
import {ThemeProvider,Box} from '@chakra-ui/core'
// import DashBoard from './Pages/DashBoard'
// import HomePage from './Pages/HomePage'
// import Typography from 'typography'
// import deYoungTheme from 'typography-theme-de-young'
import  Task from './components/Task'

export default function App() {
  return (
    <ThemeProvider> 
      <Box fontFamily='Source Sans Pro' >
      <Task/>
      </Box> 
    </ThemeProvider>
  )
}
