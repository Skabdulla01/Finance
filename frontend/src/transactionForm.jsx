import React, { use } from 'react'
import { useForm } from "react-hook-form"
import { darkmodeContext } from './context/darkmodeContext';
import { useContext } from 'react';

function transactionForm({setform}) {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

    const { darkModeData } = useContext(darkmodeContext);

    console.log(darkModeData)

  
  

  const onSubmit = (data) => {
    try {
        fetch("/financedata.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        // .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
          } catch (error) {
              console.log(error)
          }
  }
  return (
    <>
        <div className="fixed z-10 h-screen w-full shadow-2xl flex justify-center items-center">
            <div className="flex flex-col justify-between w-[30%] rounded-2xl bg-[#EAF3FF] h-[75vh] shadow-2xl p-5 " style={{backgroundColor: darkModeData?.barcolor}}>
                <div className="w-full h-[3vw] flex items-center justify-between">
                    <h3 className='text-[2vw]'>Add New Transaction</h3>
                    <button onClick={()=>(setform(false))}>
                        <div className="rounded-xl h-[2vw] w-[2vw] flex justify-center items-center ">
                            <span className="material-symbols-outlined">close</span>
                        </div>
                    </button>
                </div>
                <div className="w-full rounded-2xl border-2 border-black">
                    <form className="flex flex-col h-[60vh] items-center justify-evenly" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex w-[90%] items-center justify-between">
                            <div className="flex border-2 border-black rounded-xl items-center justify-evenly h-[6vh] w-[45%] text-[1.5vw]">
                                <input type="radio" defaultValue={true} className='scale-150 cursor-pointer accent-black border-2 border-black' {...register("type")} />
                                <label>Deposit</label>
                            </div>
                            <div className="flex border-2 border-black rounded-xl items-center justify-evenly h-[6vh] w-[45%] text-[1.5vw]">
                                <input type="radio" defaultValue={false} className='scale-150 cursor-pointer accent-black border-2 border-black' {...register("type")} />
                                <label>Withdraw</label>
                            </div>
                        </div>
                        <input type="text" placeholder='Category' className='w-[90%] h-[6vh] border-2 border-black rounded-xl' {...register("category")} />
                        <input type='date' placeholder='Date' className='w-[90%] h-[6vh] border-2 border-black rounded-xl' {...register("date")} />
                        <input type="text" placeholder='Amount' className='w-[90%] h-[6vh] border-2 border-black rounded-xl' {...register("amount")} />
                        <input type="submit" className='w-[30%] h-[6vh] rounded-xl border-2 border-black cursor-pointer hover:shadow-2xl' />
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default transactionForm