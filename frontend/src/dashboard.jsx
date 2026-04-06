import React, { useEffect, useState } from 'react'
import MonthlyExpensesGraph from './monthlyExpensesGraph'
import Card from './card'
import WalletBar from './walletBar'
import Earning from './earning'
import TransactionBar from './transactionBar'

function dashboard() {
  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch("/financedata.json")
    .then(res=>res.json())
    .then(data=>setdata(data))
  },[])

  

  
  return (
    <>
    <div className="h-screen w-full flex flex-col items-center justify-evenly" >
      <div className="w-[95%] h-5 flex items-center justify-between">
        <h1 className='text-[3vw] leading-0'><b>Dashboard</b></h1>
          <select className='rounded-xl  text-[1.5vw] cursor-pointer'>
            <option value="user">user</option>
            <option value="Admin">Admin</option>
          </select>
      </div>
        <div className="flex w-[95%]  justify-between">
          <Card />
          <WalletBar />
          <Earning />
        </div>
        <div className="flex w-[95%] justify-between">
          <TransactionBar />
          <MonthlyExpensesGraph />
        </div>
    </div>
    </>
  )
}

export default dashboard