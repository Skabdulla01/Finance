import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { darkmodeContext } from './context/darkmodeContext';

function Layout() {
  const [darkModeData, setDarkModeData] = useState(null);

  return (
    <darkmodeContext.Provider value={{ darkModeData, setDarkModeData }}>
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </darkmodeContext.Provider>
  )
}

export default Layout;