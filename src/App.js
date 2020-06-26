import React from 'react'
import {ThemeProvider} from '@chakra-ui/core'
// import DashBoard from './Pages/DashBoard'
// import HomePage from './Pages/HomePage'
import BoardWrapper from './components/BoardWrapper'
export default function App() {
  return (
    <ThemeProvider> 
      <BoardWrapper/>
    </ThemeProvider>
  )
}
