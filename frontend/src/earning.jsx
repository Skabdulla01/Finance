import React, { useEffect, useState } from 'react'
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { darkmodeContext } from './context/darkmodeContext';
import { useContext } from 'react';

function earning() {
    const rotationanimation = useRef(null);

    const [data,setdata]=useState([])
        useEffect(()=>{
          fetch("/financedata.json")
          .then(res=>res.json())
          .then(data=>setdata(data))
        },[])

    const goal = data?.[0]?.goal
    const earning = data?.[0]?.transactions?.map(item=> item.type? item.amount: 0)
    const totalearning = earning?.reduce((total,num)=> total+num,0)
    // const earningavg = (goal-totalearning)<0? goal: goal-totalearning
    const earningper= ((goal-totalearning)<0? goal: goal-totalearning)/goal*100

    const { darkModeData } = useContext(darkmodeContext);



    useGSAP(()=>{
        gsap.fromTo(rotationanimation.current,
          {
            opacity: 0,
            scale: 0.5,
            rotation: 0
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 360,
            duration: 1,
            ease: "power2.out"
        }
        )
    })
  return (
    <>
    <div className="rounded-2xl bg-[#EAF3FF] p-5 shadow-2xl h-60 w-[31%] flex flex-col justify-between items-center" style={{backgroundColor: darkModeData?.barcolor,color:darkModeData?.bartxt}}>
            <div className="w-full">
            <h1 className='text-[2vw]'>Earning</h1>
            </div>
            <div className="w-33 h-33 rounded-full flex items-center justify-center" style={{background: `conic-gradient(white 0% ${earningper}%, black ${earningper}% 100%)`}} ref={rotationanimation}>
              <div className="w-30 h-30 rounded-full flex items-center text-[1.5vw] justify-center bg-[#EAF3FF]" style={{backgroundColor: darkModeData?.barcolor}}>
                <p>${totalearning}</p>
              </div>
            </div>
            <div className="flex justify-between w-[80%]">
              <div className='flex justify-center items-center gap-[0.5vw]'><div className="h-[1vw] w-[2vw] bg-black rounded-xl"></div><div className=""><p>Earn</p></div></div>
              <div className='flex justify-center items-center gap-[0.5vw]'><div className="h-[1vw] w-[2vw] bg-white rounded-xl"></div><div className=""><p>Goal</p></div></div>
            </div>
    </div>
    </>
  )
}

export default earning