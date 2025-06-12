import React, { useContext, useState } from 'react'
import DailyProgress from './DailyProgress'
import FocusTimer from './FocusTimer'
import ToDo from './ToDo'
import MusicPlayer from './MusicPlayer'
import { UserContext } from '../../contextProviders/UserContext'

const HomePage = () => {
  const [AddTaskButtonClicked, setAddButtonClicked] = useState(false);
  const {user} = useContext(UserContext);
  return (
    <div className={`relative flex gap-6 h-full w-[calc(100% - 300px)] items-center justify-center`}>
        <div className={`h-full w-full ${AddTaskButtonClicked ? "absolute block backdrop-blur-sm" : "hidden"}`}></div>
        <div className='flex flex-col gap-6 w-1/2 items-center justify-center'>
            <span className='text-black text-2xl'>Hi 👋, {user?.displayName}</span>
            <FocusTimer />
            <ToDo AddTaskButtonClicked = {AddTaskButtonClicked} setAddButtonClicked = {setAddButtonClicked}/>
        </div>
        <div className='flex flex-col gap-6 w-1/2 items-center justify-center'>
            <DailyProgress />
            <MusicPlayer />
        </div>
    </div>
  )
}

export default HomePage
