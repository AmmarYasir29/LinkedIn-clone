import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
      {/* Feed */}
      {/* Wigde */}
      </div>
    </div>
  );
}

export default App;
