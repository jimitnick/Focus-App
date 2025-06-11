import { useState } from 'react'
import './App.css'
import FocusTimer from './components/HomePage/FocusTimer'
import LeftMenubar from './components/HomePage/LeftMenubar'
import ToDo from './components/HomePage/ToDo'
import TimerPage from './components/Timer/TimerPage'
import AlarmPage from './components/Alarm/AlarmPage'
import StopWatchPage from './components/StopWatch/StopWatchPage'
import WorldClockPage from './components/WorldClock/WorldClockPage'
import HomePage from './components/HomePage/HomePage'

function App() {
  const  [item, setItem] = useState("");
  const renderDiv = () => {
    switch(item){
      case "Focus Session":
        return <HomePage />
      case "Timer":
        return <TimerPage />
      case "Alarm":
        return <AlarmPage />
      case "StopWatch":
        return <StopWatchPage />
      case "World clock":
        return <WorldClockPage />
    }
  }
  return (
    <div className='w-screen h-screen bg-[#F7FAFC] flex items-center justify-center'>
      <LeftMenubar setItem = {setItem}/>
      <div className='w-[calc(100%-300px)] flex flex-col gap-2 h-full p-4'>
        {renderDiv()}
      </div>
    </div>
  )
}

export default App