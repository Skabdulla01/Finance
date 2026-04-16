import React, { useEffect, useState } from 'react'
import MonthlyExpensesGraph from './monthlyExpensesGraph'
import Card from './card'
import WalletBar from './walletBar'
import Earning from './earning'
import TransactionBar from './transactionBar'
import { useContext } from 'react'
import { darkmodeContext } from './context/darkmodeContext'
import { isAdminContext } from './context/isAdminContext'

function dashboard() {
  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch("/financedata.json")
    .then(res=>res.json())
    .then(data=>setdata(data))
  },[])
  
  const { darkModeData } = useContext(darkmodeContext);
  const {Admin,setAdmin} =useContext(isAdminContext);
  console.log(Admin)





  
  return (
    <>
    <div className="h-screen w-full flex flex-col items-center justify-evenly" style={{backgroundColor: darkModeData?.bgcolor}}>
      <div className="w-[95%] h-5 flex items-center justify-between">
        <h1 className='text-[3vw] leading-0'><b style={{color: darkModeData?.bartxt}}>Dashboard</b></h1>
          <select className='rounded-xl  text-[1.5vw] cursor-pointer' value={Admin?"admin":"user"} onChange={(e)=>(setAdmin(e.target.value==="admin"))}>
            <option value="user">user</option>
            <option value="admin">Admin</option>
            
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