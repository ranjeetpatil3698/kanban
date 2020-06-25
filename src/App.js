import React from 'react'
import DashBoard from './Pages/DashBoard'
import HomePage from './Pages/HomePage'
import Typography from 'typography'
import deYoungTheme from 'typography-theme-de-young'
import Board from './components/Board'
const typography = new Typography(deYoungTheme)
typography.injectStyles()

export default function App() {
  return (
    <div>
      {/* <HomePage/>
      <DashBoard/> */}
      <Board/>
    </div>
  )
}
