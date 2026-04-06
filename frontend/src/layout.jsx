import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";


function layout() {
  return (
    <>
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default layout