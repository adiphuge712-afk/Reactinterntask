import React from 'react'
import '../Components/MainSidebar.css';
const MainSidebar = () => {
  return (
    <div className="main-sidebar">
{/* 
      <div className="logo">
        <h4>VState</h4>
      </div> */}

      <ul className="sidebar-menu">

        <li className="active">
          <span>📦</span> Orders
        </li>

        <li>
          <span>👥</span> Customers
        </li>

        <li>
          <span>📄</span> Documents
        </li>

        <li>
          <span>📊</span> Reports
        </li>

        <li>
          <span>⚙</span> Settings
        </li>

      </ul>

    </div>
  );
}

export default MainSidebar