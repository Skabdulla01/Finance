import React from 'react'

function transaction() {
  return (
    <>
    <div className="h-screen w-full">
      <div className="w-[95%] h-5 flex items-center justify-between">
        <h1 className='text-[3vw] leading-0'><b>Transaction</b></h1>
          <select className='rounded-xl  text-[1.5vw] cursor-pointer'>
            <option value="user">user</option>
            <option value="Admin">Admin</option>
          </select>
      </div>
      <div className="">work in process</div>
    </div>
    </>
  )
}

export default transaction