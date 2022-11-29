import React from 'react'
import './App.css'
import Taskbar from './components/Taskbar'
import Home from './pages/home'

const App = () => {
  return (
    <>
    <div className="app_container">
      <Home/>
      <Taskbar className = "test"/>
    </div>
    </>
  )
}

export default App