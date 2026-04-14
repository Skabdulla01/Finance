import React, { useEffect } from 'react'
import { useState } from 'react'
import Loading from './loading'
import { useContext } from 'react';
import { darkmodeContext } from './context/darkmodeContext';

function transactionBar() {
  const [loading , setloading] = useState(false)
  const [data,setdata]=useState([])
    useEffect(()=>{
      setloading(true)
      fetch("/financedata.json")
      .then(res=>res.json())
      .then(data=>setdata(data))
      setloading(false)
    },[])

    const searchdata =data?.[0]?.transactions
    const { darkModeData } = useContext(darkmodeContext);
    
  
    
    const [search,setsearch] = useState("")
        // const data=[{"id":0,"category":"rent","money":1234,"date":"Nov 25","type":false},{"id":1,"category":"salory","money":9934,"date":"Nov 25","type":true},{"id":2,"category":"shopping","money":1234,"date":"Nov 25","type":false},{"id":3,"category":"shopping","money":1234,"date":"Nov 25","type":false},{"id":4,"category":"shopping","money":1234,"date":"Nov 25","type":false},{"id":5,"category":"shopping","money":1234,"date":"Nov 25","type":false},{"id":6,"category":"shopping","money":1234,"date":"Nov 25","type":false},{"id":7,"category":"shopping","money":1234,"date":"Nov 25","type":false},{"id":8,"category":"shopping","money":1234,"date":"Nov 25","type":false},{"id":9,"category":"shopping","money":1234,"date":"Nov 25","type":false},{"id":10,"category":"shopping","money":1234,"date":"Nov 25","type":false},]
        const filterdata = searchdata?.filter(item=> item.category.toLowerCase().includes((search || "").toLowerCase()))
    
      const Earn = ()=>{
        return(
          <div className="rounded-xl h-[2.5vw] w-[2.5vw] bg-green-400 flex justify-center items-center text-[#008000]">
                    <span className="material-symbols-outlined">arrow_outward</span>
                  </div>
        )}
      const Expense = ()=>{
        return(
          <div className="rounded-xl h-[2.5vw] w-[2.5vw] bg-red-400 rotate-90 flex justify-center items-center text-[#FF0000]">
                  <span className="material-symbols-outlined">arrow_outward</span>
                </div>
        )
      }
  return (
    <>
    <div className="w-[32%] h-100 rounded-2xl bg-[#EAF3FF] shadow-2xl p-5 flex flex-col justify-between" style={{backgroundColor: darkModeData?.barcolor,color:darkModeData?.bartxt}}>
            <h1 className='text-[2vw]'>Transaction</h1>
            <input type="search" placeholder='Search' className='text-center rounded-xl h-[5vh] border-2 border-black' value={search} onChange={(e) => setsearch(e.target.value)} />
            
            <div className="rounded-2xl h-70 overflow-y-scroll no-scrollbar">
              <ul className=' flex flex-col items-center '>
                {loading?<Loading />:filterdata?.map((item,index)=>(
                  <li key={index} className='flex items-center justify-evenly h-[8vh] border-b-2 w-full hover:bg-white/40'>
                    <div className="">{item.type?<Earn/>:<Expense/>}</div>
                    <h3 className='w-[30%] text-center'>{item.category}</h3>
                    <h3 className="">{item.date}</h3>
                    <h3>$ {item.amount}</h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
    </>
  )
}

export default transactionBar