import React from 'react'
import {PencilIcon} from "@heroicons/react/24/solid"
import Subheading from '../../SubComponents/Subheading'
const DailyProgress = () => {
  return (
    <div className='w-full h-[400px] bg-white p-4 flex flex-col rounded-xl justify-between shadow-md'>
      <Subheading title={"Daily Progress"} icon={<PencilIcon className='h-5 w-5 text-black cursor-pointer'/>}/>
      <div className='flex gap-3 w-full h-[300px] items-center justify-between '>
        <div className='flex flex-col gap-6 w-[100px] h-full items-center justify-center'>
          <span className='text-black text-md'>Yesterday</span>
          <span className='text-black text-xl'>0</span>
          <span className='text-black text-md'>mintes</span>
        </div>
        <div className='w-[300px] h-[300px] rounded-full p-4 bg-gray-300 flex items-center justify-center' >
          <div className='rounded-full h-full w-full flex flex-col items-center justify-center bg-white'>
            <span className='text-black text-md'>Daily Goal</span>
            <span className='text-black text-5xl'>1</span>
            <span className='text-black text-md'>hour</span>
          </div>
        </div>
        <div className='flex flex-col gap-6 w-[100px] items-center justify-center h-full'>
          <span className='text-black text-md'>Streak</span>
          <span className='text-black text-xl'>0</span>
          <span className='text-black text-md'>days</span>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <span className='text-black text-lg'>Completed : 0 minutes</span>
      </div>
    </div>
  )
}

export default DailyProgress
