import React from 'react'

const Elements = (props) => {
  return (
    <div className='flex gap-3 w-full items-center hover:bg-[#E7EBF0] justify-start cursor-pointer p-2 rounded-lg' onClick={() => {
        props.setItems(props.title);
    }}>
        <img src={props.image} alt="" className={`object-cover ${props.size} bg-transparent`}/>
        <span className='text-black'>{props.title}</span>
    </div>
  )
}

export default Elements
