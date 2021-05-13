import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Wiged from "./components/Wiged";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Wiged />
      </div>
    </div>
  );
}

export default App;
