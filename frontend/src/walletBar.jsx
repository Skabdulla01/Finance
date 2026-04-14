import React, { useEffect, useState } from 'react'
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { darkmodeContext } from './context/darkmodeContext';
import { useContext } from 'react';

function walletBar() {
  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch("/financedata.json")
    .then(res=>res.json())
    .then(data=>setdata(data))
  },[])

  
    const earning = data?.[0]?.transactions?.map(item=> item.type? item.amount: 0)
    const totalearning = earning?.reduce((total,num)=> total+num,0)
    const expenses = data?.[0]?.transactions?.map(item=> item.type? 0:item.amount)
    const totalexpenses = expenses?.reduce((total,num)=> total+num,0)
    const walletAmount = totalearning-totalexpenses
        
    const { darkModeData } = useContext(darkmodeContext);

  useGSAP(() => {
    gsap.from(".upanimation", {
      y:25,
      opacity:0,
      duration: 1
    });
  }, []);

  return (
    <>
    <div className="rounded-2xl bg-[#EAF3FF] h-60 w-[31%] p-5 shadow-2xl flex flex-col justify-between" style={{backgroundColor: darkModeData?.barcolor,color:darkModeData?.bartxt}}>
            <h3 className='text-[2vw]'>Wallet</h3>
            <div className="upanimation text-[4vw] leading-none text-center overflow-hidden">${walletAmount}</div>
            <div className="flex">
              <div className="upanimation flex items-center w-[50%] justify-center gap-[0.5vw]">
                <div className="rounded-xl h-[2.5vw] w-[2.5vw] bg-green-400 flex justify-center items-center text-[#008000]">
                  <span className="material-symbols-outlined">arrow_outward</span>
                </div>
                <div className="text-[1.2vw] text-center leading-none">
                  <div className="">${totalearning}</div>
                  <div className="">income</div>
                </div>
              </div>
              <div className="upanimation flex items-center w-[50%] justify-center gap-[0.5vw]">
                <div className="rounded-xl h-[2.5vw] w-[2.5vw] bg-red-400 flex justify-center items-center rotate-90 text-[#FF0000]">
                  <span className="material-symbols-outlined">arrow_outward</span>
                </div>
                <div className="text-[1.2vw] text-center leading-none">
                  <div className="">${totalexpenses}</div>
                  <div className="">expenses</div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default walletBar