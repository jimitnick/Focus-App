import React, { useState } from 'react'
import { ArrowUpIcon, ArrowDownIcon,PlayIcon } from '@heroicons/react/24/solid'

const FocusTimer = () => {
  const [minutes, setMinutes] = useState(10);
  const [breakAlert, setbreakAlert] = useState(false);
  return (
    <div className='bg-white flex flex-col h-[460px] w-full rounded-xl justify-center items-center gap-8 shadow-md'>
      <div className='flex flex-col items-center gap-7'>
        <h1 className='font-bold text-2xl mb-2'>Get ready to focus</h1>
        <div className='flex flex-col items-center'>
          <p className='text-gray-400 text-md'>We'll turn off notifications and app alerts during each session.For</p>
          <p className='text-gray-400 text-md'>longer sessions, we'll add a short break so you can recharge</p>
        </div>
      </div>
      
      <div className='flex justify-between items-center w-[150px] h-[90px] border-1 border-gray-300 rounded-xl'>
        <div className='flex flex-col items-center justify-center w-[calc(100%-50px)] rounded-xl gap-2'>
          <span className='font-bold text-xl'>{minutes}</span>
          <span className='text-gray-300 text-sm'>mins</span>
        </div>
        <div className='flex flex-col h-full w-[50px] justify-between'>
          <div className='w-full h-1/2 hover:bg-gray-100 flex items-center justify-center border-b-1 cursor-pointer' onClick={() => {
            setMinutes(minutes => minutes+1)
            minutes >= 30 ? setbreakAlert(true) : setbreakAlert(false)
          }}><ArrowUpIcon className='h-5 w-5 text-black'/></div>
          <div className='w-full h-1/2 hover:bg-gray-100 flex items-center justify-center cursor-pointer' onClick={() => {
            setMinutes(minutes => minutes-1)
            minutes >= 30 ? setbreakAlert(true) : setbreakAlert(false)
          }}><ArrowDownIcon className='h-5 w-5 text-black'/></div>
        </div>
      </div>
      <span className='text-sm font-extrabold'>{`${breakAlert ? "You will get break in between" : "You will not get break in between"}`}</span>
      <button className='p-3 bg-[#0067C0] text-white flex items-center justify-between rounded-md cursor-pointer'>
        <PlayIcon className='h-5 w-5  text-white'/>
        Start Focus Session</button>
    </div>
  )
}

export default FocusTimer
