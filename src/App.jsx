import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Order from './Components/Order'
import Sidebar from './Components/Sidebar'
import MainSidebar from './Components/MainSidebar'

function App() {

  return (
    <>
     {/* <Order/> */}
     <div className="d-flex">

      <MainSidebar />

      <div className="content-area">
        <Sidebar />
      </div>

    </div>
    </>
  )
}

export default App
