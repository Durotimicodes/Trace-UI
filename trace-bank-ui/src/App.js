import React from "react";
import './index.css';
import Sidebar from './components/Sidebar'
import RightSidebar from './components/RightSidebar'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="app__container">
    <Sidebar/>
    <Dashboard/>
    <RightSidebar/>
    </div>
  );
}

export default App;
