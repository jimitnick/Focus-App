import React from 'react'

const Subheading = ({title, icon, addbtnfunction}) => {
  return (
    <div className='flex  w-full justify-between items-center h-[50px] border-b-1'>
        <span className='text-black text-lg font-bold'>{title}</span>
        <span onClick={() => {
            addbtnfunction(true);
        }}>{icon}</span>
    </div>
  )
}

export default Subheading
