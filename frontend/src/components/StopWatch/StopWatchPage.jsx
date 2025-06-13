import React, { useEffect, useRef, useState } from 'react'
const formatTime = (time) => {
  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = Math.floor(time / 60);
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
  return `${getHours}:${getMinutes}:${getSeconds}`;
};

const StopWatchPage = () => {
  
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [running]);

  const handleStartStop = () => setRunning(!running);
  const handleReset = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='flex flex-col items-center gap-4'>
         <h1 className='text-8xl font-bold'>{formatTime(time)}</h1>
          <div className='flex gap-4 mt-6'>
            <button
              onClick={handleStartStop}
              className='px-4 py-2 bg-blue-500 text-white rounded-lg'
            >
              {running ? 'Stop' : 'Start'}
            </button>
            <button
              onClick={handleReset}
              className='px-4 py-2 bg-gray-400 text-white rounded-lg'
            >
              Reset
            </button>
        </div>
      </div>
      
    </div>
  )
}

export default StopWatchPage
