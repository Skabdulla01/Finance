import React, { useEffect, useState } from 'react'
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function monthlyExpensesGraph() {
  const [data,setdata]=useState([])
        useEffect(()=>{
          fetch("/financedata.json")
          .then(res=>res.json())
          .then(data=>setdata(data))
        },[])
    
    // const graph = {"jan":0,"feb":2500,"mar":5400,"apr":2300,"may":7200,"jun":4500,"jul":6530,"aug":3000,"sep":2341,"oct":1200,"nov":900,"dec":1000}
    
    // const monthgraph = data?.[0]?.transactions?.map(item=> item.type && item.date?.slice(5, 7)==="01"? item.amount: 0)?.reduce((total,num)=> total+num,0) - data?.[0]?.transactions?.map(item=> !item.type && item.date?.slice(5, 7)==="01"? item.amount: 0)?.reduce((total,num)=> total+num,0)
    // console.log(monthgraph)

    const graph = {};

for (let i = 1; i <= 12; i++) {
  const num = ("0" + i).slice(-2);

  const monthgraph =
    data?.[0]?.transactions
      ?.filter(item => item.date?.slice(5, 7) === num)
      ?.reduce((total, item) => {
        return item.type
          ? total + item.amount  
          : total - item.amount; 
      }, 0) || 0;

  graph[num] = monthgraph;
}


    // useGSAP(()=>{
    //     gsap.from(".bar",{
    //         height:0,
    //         duration:1,
    //         stagger:0.1,
    //         delay:1,
    //         ease:"bounce.out"
    //     })
    // },[])
  return (
    <>
    <div className="w-[65%] rounded-2xl bg-[#EAF3FF] h-100 shadow-2xl p-5 ">
        <h1 className='text-[2vw]'>Monthly Expenses</h1>
        <div className="h-80 w-full flex justify-center items-center">
          <div className="relative h-70 w-[90%] flex justify-evenly items-end border-l-3 border-b-3 border-black">
            <div className="bar w-[6%] bg-black flex items-center justify-center" style={{height:`${graph["01"]*0.0125}%`}}></div>
            <div className="bar w-[6%] bg-black flex items-center justify-center" style={{height:`${graph["02"]*0.0125}%`}}></div>
            <div className="bar w-[6%] bg-black flex items-center justify-center" style={{height:`${graph["03"]*0.0125}%`}}></div>
            <div className="bar w-[6%] bg-black flex items-center justify-center" style={{height:`${graph["04"]*0.0125}%`}}></div>
            <div className="bar w-[6%] bg-black flex items-center justify-center" style={{height:`${graph["05"]*0.0125}%`}}></div>
            <div className="bar w-[6%] bg-black flex items-center justify-center" style={{height:`${graph["06"]*0.0125}%`}}></div>
            <div className="bar w-[6%] bg-black flex items-center justify-center" style={{height:`${graph["07"]*0.0125}%`}}></div>
            <div className="bar w-[6%] bg-black flex items-center justify-center" style={{height:`${graph["08"]*0.0125}%`}}></div>
            <div className="bar w-[6%] bg-black flex items-center justify-center" style={{height:`${graph["09"]*0.0125}%`}}></div>
            <div className="bar w-[6%] bg-black flex items-center justify-center" style={{height:`${graph["10"]*0.0125}%`}}></div>
            <div className="bar w-[6%] bg-black flex items-center justify-center" style={{height:`${graph["11"]*0.0125}%`}}></div>
            <div className="bar w-[6%] bg-black flex items-center justify-center" style={{height:`${graph["12"]*0.0125}%`}}></div>
            <div className="absolute bottom-0 w-full flex justify-evenly translate-y-6  text-[1vw]">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                <div className='w-[6%] text-center' key={m}>{m}</div>
              ))}
            </div>
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[1vw] leading-0 -translate-x-8">
              {[0, "1k-", "2k-", "3k-", "4k-", "5k-", "6k-", "7k-", "8k-"].reverse().map((val) => (
                <div className='' key={val}>{val}</div>
              ))}
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default monthlyExpensesGraph