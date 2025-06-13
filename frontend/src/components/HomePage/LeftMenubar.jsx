import React, { useContext, useEffect } from 'react'
import ClockImage from "../../images/clock.jpg"
import FocusSession from "../../images/focusSession.png"
import Timer from "../../images/timer.png"
import Alarm from "../../images/alarm.png"
import Stopwatch from "../../images/stopwatch.png"
import WorldClock from "../../images/worldclock.png"
import Elements from './Elements'
import { UserContext } from '../../contextProviders/UserContext'
import { Navigate, useNavigate } from 'react-router-dom'
import Login from '../LoginAndLogout/Login'

const LeftMenubar = ({setItem}) => {
  const { user, setUser, logout} = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if(!user){
      navigate("/")
    }
    else{
      navigate("/homepage");
    }
  },[user])
  const handleLogout = () => {
    logout();
  }
  return (
    <div className='flex flex-col w-[300px] h-full p-4 bg-[#EFF4F9] shadow-md'>
      <div className='p-3 flex w-full items-center justify-start gap-3 border-b-1'>
        <img src={ClockImage} alt="" className='object-cover h-17 w-17 rounded-full '/>
        <h1 className='text-black text-2xl'>Focus App</h1>
      </div>
      <div className='flex flex-col p-4 gap-4'>
        <Elements size={"h-12 w-12"} image={FocusSession} title={"Focus Session"} setItems = {setItem}/>
        <Elements size={"h-12 w-12"} image={Timer} title={"Timer"} setItems = {setItem}/>
        <Elements size={"h-10 w-10"} image={Stopwatch} title={"StopWatch"} setItems = {setItem}/>
        <Elements size={"h-8 w-8"} image={WorldClock} title={"World clock"} setItems = {setItem}/>
        <button className='w-full h-[50px] p-4 bg-[#dadada] flex items-center justify-center cursor-pointer hover:bg-[white] rounded-md' onClick={() => {handleLogout()}}>Sign Out</button>
      </div>
    </div>
  )
}

export default LeftMenubar
