import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { darkmodeContext } from './context/darkmodeContext';
import { isAdminContext } from './context/isAdminContext';

function Layout() {
  const [darkModeData, setDarkModeData] = useState(null);
  const [Admin,setAdmin]=useState(false)

  return (
    <>
    <isAdminContext.Provider value={{Admin,setAdmin}}>
      <darkmodeContext.Provider value={{ darkModeData, setDarkModeData }}>
        <div className="flex">
          <Sidebar />
          <Outlet />
        </div>
      </darkmodeContext.Provider>
    </isAdminContext.Provider>
    </>
  )
}

export default Layout;