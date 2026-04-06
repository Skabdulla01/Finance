import React, { useEffect, useState } from 'react'

function card() {
  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch("/financedata.json")
    .then(res=>res.json())
    .then(data=>setdata(data))
  },[])
  const cardNumber = data?.[0]?.card?.number
  const username = data?.[0]?.card?.username


  return (
    <>
    <div className="rounded-2xl bg-[#EAF3FF] h-60 w-[32%] p-5 flex flex-col justify-between">
            <h3 className='text-[2vw]'>Card</h3>
            
            <div className="text-[1.5vw] text-center">{cardNumber}</div>

            <div className="text-[2vw]"><h3>{username}</h3></div>
            
          </div>
    </>
  )
}

export default card