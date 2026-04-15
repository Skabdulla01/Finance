import React, { useEffect, useState } from 'react'
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { darkmodeContext } from './context/darkmodeContext';
import { useContext } from 'react';

function monthlyExpensesGraph() {
  const [graphData, setgraphData] = useState(null)
  const container = useRef();
  const [data,setdata]=useState([])
        useEffect(()=>{
          fetch("/financedata.json")
          .then(res=>res.json())
          .then(data=>setdata(data))
        },[])
    
    

    const graph = [];

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

  graph.push(monthgraph);
}

    const { darkModeData } = useContext(darkmodeContext);

    useGSAP(()=>{
      if (data.length === 0) return;
        gsap.from(container.current.querySelectorAll(".bar"),{
            height:0,
            duration:1,
            stagger:0.1,
            delay:1,
            ease:"bounce.out"
        })
    },[data])
  return (
    <>
    <div className="w-[65%] rounded-2xl bg-[#EAF3FF] h-100 shadow-2xl p-5 " style={{backgroundColor: darkModeData?.barcolor,color:darkModeData?.bartxt}}>
        <h1 className='text-[2vw]'>Monthly Expenses</h1>
        <div className="h-80 w-full flex justify-center items-center">
          <div ref={container} className="relative h-70 w-[90%] flex justify-evenly items-end border-l-3 border-b-3 border-black">
            {
              graph.map((val,index)=>(
                <>
                {/* <div>flex items-center justify-center</div> */}
                <div key={index} className="h-full w-[6%] flex flex-col items-center flex-end justify-end">
                {graphData === index && <span className=''>{val}</span>}
                <div className="bar w-full bg-black cursor-pointer " onMouseEnter={()=>(setgraphData(index))} onMouseLeave={()=>(setgraphData(null))} style={{height:`${val*0.0125}%`}}></div>
                </div>
                </>
                
              ))
            }

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