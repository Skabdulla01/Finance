import React from 'react'

function loading() {
  return (
    <>
    <div className="flex items-start justify-center h-screen">
      <div className="w-[30vw] h-[30vw] border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
    </>
  )
}

export default loading