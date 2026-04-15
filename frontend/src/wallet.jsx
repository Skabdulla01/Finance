import React from 'react'
import { useContext } from 'react';
import { darkmodeContext } from './context/darkmodeContext';

function wallet() {
  const { darkModeData } = useContext(darkmodeContext);

  return (
    <>
    <div className="h-screen w-full flex flex-col items-center justify-evenly">
      <div className="w-[95%] h-[8vh] flex items-center justify-between">
        <h1 className='text-[3vw] leading-0'><b>Wallet</b></h1>
          <button className='rounded-xl w-[8%] h-[3vw] text-[1.5vw] cursor-pointer flex border-2 border-black items-center justify-evenly' onClick={()=>(setform(true))}>
            <div className="rounded-xl h-[2vw] w-[2vw] flex justify-center items-center ">
              <span className="material-symbols-outlined">add</span>
            </div>
            <h3 className='text-[1.2vw]'>Add</h3>
          </button>
      </div>

    </div>
    </>
  )
}

export default wallet