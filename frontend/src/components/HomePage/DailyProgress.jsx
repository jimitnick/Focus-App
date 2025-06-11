import React from 'react'
import {PencilIcon} from "@heroicons/react/24/solid"
const DailyProgress = () => {
  return (
    <div className='w-[600px] h-[400px] bg-white p-4'>
      <div className='flex justify-between'>
        <span className='text-black text-xl'>Daily Progress</span>
        <PencilIcon className='h-8 w-8 text-black'/>
      </div>
      <div className='flex gap-3 w-full h-[100px]'>
        <div className='flex flex-col gap-6 w-full h-full'>
          <span className='text-black text-xl'>Yesterday</span>
          <span className='text-black text-5xl'>0</span>
          <span className='text-black text-xl'>mintes</span>
        </div>
        <div className='w-full h-full rounded-full p-4 bg-gray-300'>
          <div className='rounded-full flex flex-col items-center justify-center'>
            <span className='text-black text-xl'>Daily Goal</span>
            <span className='text-black text-5xl'>1</span>
            <span className='text-black text-xl'>hour</span>
          </div>
        </div>
        <div className='flex flex-col gap-6 w-full h-full'>
          <span className='text-black text-xl'>Streak</span>
          <span className='text-black text-5xl'>0</span>
          <span className='text-black text-xl'>days</span>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <span className='text-black text-lg'>Completed : 0 minutes</span>
      </div>
    </div>
  )
}

export default DailyProgress
