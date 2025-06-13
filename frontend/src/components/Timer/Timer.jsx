// import React, { useEffect, useState } from 'react'
// import { ArrowsPointingOutIcon, ArrowTopRightOnSquareIcon,PlayCircleIcon, PauseCircleIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

// const Timer = ({hours, minutes, seconds}) => {
//     const [playcircleicon, setplayicon] = useState(true);
//     const [time, setTime] = useState({
//         hours:0,
//         minutes:0,
//         seconds:0
//     });
//     useEffect(() => {
//         setTime({
//             hours:hours,
//             minutes:minutes,
//             seconds:seconds
//         });
//     },[])
//     const timer = (hours, minutes, seconds) => {
//         const hoursInSeconds = hours *3600;
//         const minutesInSeconds = minutes*60;
//         const totalSeconds = hoursInSeconds+minutesInSeconds+seconds;
//         setInterval(() => {
//             hours -= 1;
//         }, totalSeconds);
//     }
//   return (
//     <div className='w-[350px] h-[350px] rounded-xl flex flex-col p-3 bg-white justify-between items-center'>
//         <div className='flex w-full justify-between items-center'>
//             <span className='text-black text-md font-bold'>1 min</span>
//             <div className='flex gap-3 items-center'>
//                 <ArrowsPointingOutIcon className='h-5 w-5 text-black'/>
//                 <ArrowTopRightOnSquareIcon className='h-5 w-5 text-black'/>
//             </div>
//         </div>
//         <div className='timerCircle flex items-center justify-center w-[75%] h-[75%] rounded-full p-4 bg-gray-100'>
//             <div className='flex gap-1 items-center justify-center w-full h-full bg-white rounded-full'>
//                 <div className='flex flex-col items-center justify-center gap-1'>
//                     <input type="number" name="hours" id="hours" className='w-[50px] h-[50px] border text-center rounded-lg border-[#9e9b9b]' value={time.hours} onChange={(e) => {
//                      setTime({hours:e.target.value})
//                     }}/>
//                     <span className='text-black text-sm'>Hours</span>
//                 </div>
                
//                 <span className='text-4xl font-semibold'>:</span>
//                 <div className='flex flex-col items-center justify-center gap-1'>
//                     <input type="number" name="hours" id="hours" className='w-[50px] h-[50px] border text-center rounded-lg border-[#9e9b9b]' value={time.minutes} onChange={(e) => {
//                         setTime({minutes:e.target.value})
//                     }}/>
//                     <span className='text-black text-sm'>Minutes</span>
//                 </div>
                
//                 <span className='text-4xl font-semibold'>:</span>
//                 <div className='flex flex-col items-center justify-center gap-1'>
//                     <input type="number" name="hours" id="hours" className='w-[50px] h-[50px] border text-center rounded-lg border-[#9e9b9b]' value={time.seconds} onChange={(e) =>{
//                         setTime({seconds:e.target.value})
//                     }}/>
//                     <span className='text-black text-sm'>Seconds</span>
//                 </div>
                
//             </div>
//         </div>
//         <div className='flex gap-3 justify-center items-center'>
//             <button className='w-[50px] h-[50px] rounded-full cursor-pointer' onClick={() => {
//                 setplayicon(prev => !prev)
//                 timer();
//             }}>
//                 {playcircleicon ? <PlayCircleIcon className='w-full h-full text-blue-600'/> : <PauseCircleIcon className='w-full h-full text-blue-600'/>}
//             </button>
//             <button className='cursor-pointer w-[40px] h-[40px] rounded-full border-1 border-[#222] flex items-center justify-center' onClick={() => {
//                 setTime({
//                     hours:hours,
//                     minutes:minutes,
//                     seconds:seconds
//                 })
//             }}>
//                 <ArrowUturnLeftIcon className='h-5 w-5 text-black'/>
//             </button>
//         </div>
        
//     </div>
//   )
// }

// export default Timer
import React, { useEffect, useRef, useState } from 'react'
import {
  ArrowsPointingOutIcon,
  ArrowTopRightOnSquareIcon,
  PlayCircleIcon,
  PauseCircleIcon,
  ArrowUturnLeftIcon
} from '@heroicons/react/24/solid'

const Timer = ({ hours: initHours, minutes: initMinutes, seconds: initSeconds }) => {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState({ hours: initHours, minutes: initMinutes, seconds: initSeconds })
  const intervalRef = useRef(null)

  const totalSeconds = (time) =>
    parseInt(time.hours) * 3600 + parseInt(time.minutes) * 60 + parseInt(time.seconds)

  const tick = () => {
    setTime((prevTime) => {
      const total = totalSeconds(prevTime)
      if (total <= 0) {
        clearInterval(intervalRef.current)
        return { hours: 0, minutes: 0, seconds: 0 }
      }

      const newTotal = total - 1
      const hrs = Math.floor(newTotal / 3600)
      const mins = Math.floor((newTotal % 3600) / 60)
      const secs = newTotal % 60
      return { hours: hrs, minutes: mins, seconds: secs }
    })
  }

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(tick, 1000)
      setIsRunning(true)
    }
  }

  const pauseTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
    setIsRunning(false)
  }

  const resetTimer = () => {
    pauseTimer()
    setTime({ hours: initHours, minutes: initMinutes, seconds: initSeconds })
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current) // cleanup on unmount
  }, [])

  const handleInputChange = (field, value) => {
    setTime((prev) => ({ ...prev, [field]: Number(value) }))
  }

  return (
    <div className='w-[350px] h-[350px] rounded-xl flex flex-col p-3 bg-white justify-between items-center'>
      <div className='flex w-full justify-between items-center'>
        <span className='text-black text-md font-bold'>Timer</span>
        <div className='flex gap-3 items-center'>
          <ArrowsPointingOutIcon className='h-5 w-5 text-black' />
          <ArrowTopRightOnSquareIcon className='h-5 w-5 text-black' />
        </div>
      </div>
      <div className='timerCircle flex items-center justify-center w-[75%] h-[75%] rounded-full p-4 bg-gray-100'>
        <div className='flex gap-1 items-center justify-center w-full h-full bg-white rounded-full'>
          {['hours', 'minutes', 'seconds'].map((unit, idx) => (
            <>
            <div key={unit} className='flex flex-col items-center justify-center gap-1'>
              <input
                type='number'
                name={unit}
                value={time[unit]}
                onChange={(e) => handleInputChange(unit, e.target.value)}
                className='w-[50px] h-[50px] border text-center rounded-lg border-[#9e9b9b]'
              />
              <span className='text-black text-sm'>{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
            </div>
            </>
          ))}
        </div>
      </div>
      <div className='flex gap-3 justify-center items-center'>
        <button
          className='w-[50px] h-[50px] rounded-full cursor-pointer'
          onClick={() => {
            isRunning ? pauseTimer() : startTimer()
          }}
        >
          {isRunning ? (
            <PauseCircleIcon className='w-full h-full text-blue-600' />
          ) : (
            <PlayCircleIcon className='w-full h-full text-blue-600' />
          )}
        </button>
        <button
          className='cursor-pointer w-[40px] h-[40px] rounded-full border-1 border-[#222] flex items-center justify-center'
          onClick={resetTimer}
        >
          <ArrowUturnLeftIcon className='h-5 w-5 text-black' />
        </button>
      </div>
    </div>
  )
}

export default Timer
