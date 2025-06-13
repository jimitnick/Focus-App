import React, { useState } from 'react'
import Timer from './Timer'
import { PlusIcon } from '@heroicons/react/24/outline'
const TimerPage = () => {
  const [timers, setTimers] = useState([]);
  return (
    <div className='w-full h-full flex justify-center items-center flex-wrap gap-2 bg-[#F8F9FC] overflow-y-auto'>
      <div className='absolute flex items-center justify-center w-[60px] h-[60px] rounded-xl bottom-40 right-5 bg-white cursor-pointer' onClick={() => {
        setTimers(prev => [...prev ,<Timer />])
      }}>
        <PlusIcon className='h-8 w-8 text-black'/>
      </div>
      <Timer />
      <Timer />
      <Timer />
      {
        timers.map(timer => (
          timer
        ))
      }
    </div>
  )
}

export default TimerPage
