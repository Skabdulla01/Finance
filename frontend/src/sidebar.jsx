import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { darkmodeContext } from './context/darkmodeContext';
import { useContext } from 'react';
import { isAdminContext } from './context/isAdminContext';

function sidebar() {
    const [darkMode,setdarkMode] = useState()
    const [data,setdata]=useState([])
    const [isAdmin,setisAdmin]=useState(data?.[0]?.isAdmin)
    const { setDarkModeData } = useContext(darkmodeContext)
    const {Admin,setAdmin}=useContext(isAdminContext)

        useEffect(()=>{
          fetch("/financedata.json")
          .then(res=>res.json())
          .then(data=>setdata(data))
        },[])


    const username = data?.[0]?.name
    const mode = data?.[0]?.isDarkmode
    useEffect(()=>{
        setdarkMode(mode)
    },[mode])

    useEffect(()=>{
        setisAdmin(Admin)
    },[Admin])

    




    const darkModefeature = darkMode?{"mode":"dark","symbol":"light_mode","name":"Light mode","bgcolor":"#0F172A","barcolor":"#1E293B","bartxt":"#fff","barhover":"#273449"}:{"mode":"light","symbol":"dark_mode","name":"Dark mode","bgcolor":"#ffffff","barcolor":"#EAF3FF","bartxt":"#000","barhover":"#D6E8FF"}
    // useEffect(()=>{
    //     localStorage.setItem('darkMode', darkMode);
    // },[darkMode])

    useEffect(() => {
    setDarkModeData(darkModefeature)
  }, [darkMode])
  useEffect(() => {
    setAdmin(isAdmin)
  }, [isAdmin])


  return (
    <>
    <div className="h-screen w-[18%] flex flex-col items-center justify-center" style={{backgroundColor:darkModefeature.barcolor, color:darkModefeature.bartxt}}>
        <div className="h-[80vh] w-[80%] flex flex-col items-center justify-between">
            <div className="w-full h-10">
                <h2 className='text-[2.3vw] text-center'>{username}</h2>
            </div>
            <div className='w-full h-[40vh]'>
                <Link to="/">
                    <div className="w-full rounded-xl p-2 h-10 hover:bg-white/40 flex justify-start gap-1 items-center text-[1.5vw] cursor-pointer" >
                        <div className="flex justify-center items-center"><span className='material-symbols-outlined'>dashboard</span></div>
                        <h3>Dashboard</h3>
                    </div>
                </Link>
                {isAdmin?
                <>
                <Link to="/wallet">
                    <div className="flex p-2 rounded-xl h-10 justify-start items-center hover:bg-white/40 gap-1 text-[1.5vw] cursor-pointer">
                        <div className="flex justify-center items-center"><span className='material-symbols-outlined'>account_balance_wallet</span></div>
                        <h3>Wallet</h3>
                    </div>
                </Link>
                <Link to="/transaction">
                    <div className="flex p-2 rounded-xl h-10 justify-start items-center hover:bg-white/40 gap-1 text-[1.5vw] cursor-pointer">
                        <div className="flex justify-center items-center"><span className='material-symbols-outlined'>stacks</span></div>
                        <h3>Transaction</h3>
                    </div>
                </Link>
                </>:""}

            </div>
            <div className="">
                <button className='flex p-2 rounded-xl h-10 justify-start items-center hover:bg-white/40 gap-1 text-[1.5vw] cursor-pointer' onClick={()=>(setdarkMode(!darkMode))}>
                    <div className="flex justify-center items-center"><span className='material-symbols-outlined'>{darkModefeature.symbol}</span></div>
                    <h3>{darkModefeature.name}</h3>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default sidebar