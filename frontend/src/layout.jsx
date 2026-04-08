import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";


function layout() {
  return (
    <>
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
    </>
  )
}

export default layout