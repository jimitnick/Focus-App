import React from 'react'
import ClockImage from "../../images/clock.jpg"
import FocusSession from "../../images/focusSession.png"
import Timer from "../../images/timer.png"
import Alarm from "../../images/alarm.png"
import Stopwatch from "../../images/stopwatch.png"
import WorldClock from "../../images/worldclock.png"
import Elements from './Elements'

const LeftMenubar = ({setItem}) => {
  return (
    <div className='flex flex-col w-[300px] h-full p-4 bg-[#EFF4F9]'>
      <div className='p-3 flex w-full items-center justify-start gap-3 border-b-1'>
        <img src={ClockImage} alt="" className='object-cover h-17 w-17 rounded-full '/>
        <h1 className='text-black text-2xl'>Focus App</h1>
      </div>
      <div className='flex flex-col p-4 gap-4'>
        <Elements size={"h-12 w-12"} image={FocusSession} title={"Focus Session"} setItems = {setItem}/>
        <Elements size={"h-12 w-12"} image={Timer} title={"Timer"} setItems = {setItem}/>
        <Elements size={"h-9 w-9"} image={Alarm} title={"Alarm"} setItems = {setItem}/>
        <Elements size={"h-10 w-10"} image={Stopwatch} title={"StopWatch"} setItems = {setItem}/>
        <Elements size={"h-8 w-8"} image={WorldClock} title={"World clock"} setItems = {setItem}/>
      </div>
    </div>
  )
}

export default LeftMenubar
