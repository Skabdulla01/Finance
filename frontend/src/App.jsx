import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from './dashboard'
import Transaction from './transaction';
import Wallet from './wallet';
import Layout from './layout'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/wallet" element={<Wallet />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
