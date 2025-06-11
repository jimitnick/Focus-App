import React from 'react'
import DailyProgress from './DailyProgress'
import FocusTimer from './FocusTimer'
import ToDo from './ToDo'

const HomePage = () => {
  return (
    <div className='flex gap-2'>
        <div className='flex flex-col'>
            <FocusTimer />
            <ToDo />
        </div>
        <div className='flex flex-col'>
            <DailyProgress />
        </div>
    </div>
  )
}

export default HomePage
