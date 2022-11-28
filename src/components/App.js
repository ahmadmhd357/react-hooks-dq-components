import React from "react";
import SideMenu from './SideMenu'
import TopMenu from './TopMenu'
import MainContent from './MainContent'
function App() {
  return <div className="app-container">
    <SideMenu />
    <TopMenu />
    <MainContent />
  </div>;
}

export default App;
