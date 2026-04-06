import React from 'react'

function loading() {
  return (
    <>
    <div className="flex items-start justify-center min-h-screen">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
    </>
  )
}

export default loading