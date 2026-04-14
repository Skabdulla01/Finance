import React, { useEffect, useState } from 'react'
import Loading from './loading'
import TransactionForm from './transactionForm'
import { useContext } from 'react'
import { darkmodeContext } from './context/darkmodeContext'

function transaction() {
  const [loading , setloading] = useState(false)
  const [form,setform] = useState(false)
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
    {form && <TransactionForm setform={setform} />}
    
    <div className="h-screen w-full flex flex-col items-center justify-evenly" style={{backgroundColor: darkModeData?.bgcolor,color:darkModeData?.bartxt}}>
      <div className="w-[95%] h-[8vh] flex items-center justify-between">
        <h1 className='text-[3vw] leading-0'><b>Transaction</b></h1>
          <button className='rounded-xl w-[8%] h-[3vw] text-[1.5vw] cursor-pointer flex border-2 border-black items-center justify-evenly' onClick={()=>(setform(true))}>
            <div className="rounded-xl h-[2vw] w-[2vw] flex justify-center items-center ">
              <span className="material-symbols-outlined">add</span>
            </div>
            <h3 className='text-[1.2vw]'>Add</h3>
          </button>
      </div>
      <div className="h-[85vh] w-[95%] flex flex-col  bg-[#EAF3FF]" style={{backgroundColor: darkModeData?.barcolor}}>
        <div className="w-full">
            {/* <input type="search" placeholder='Search' className='text-center rounded-xl h-[5vh] border-2 border-black' value={search} onChange={(e) => setsearch(e.target.value)} /> */}
            <input type="search" placeholder='Search' className='w-full text-center rounded-xl h-[7vh] border-2 border-black' value={search} onChange={(e) => setsearch(e.target.value)}/>
        </div>
        <div className=" h-full w-full overflow-y-scroll [scrollbar-width:none]">
          <ul className=' flex flex-col items-center '>
                {loading?<Loading />:filterdata?.map((item,index)=>(
                  <li key={index} className='flex items-center justify-evenly h-[8vh] border-b-2 w-full hover:bg-white/40'>
                    <div className="">{item.type?<Earn/>:<Expense/>}</div>
                    <h3 className='w-[30%] text-center'>{item.category}</h3>
                    <h3 className="">{item.date}</h3>
                    <h3>$ {item.amount}</h3>
                    <button className="cursor-pointer">Edit</button>
                    <button className="cursor-pointer">Delete</button>
                  </li>
                ))}
              </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default transaction