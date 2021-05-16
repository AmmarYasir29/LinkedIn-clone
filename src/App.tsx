import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Wiged from "./components/Wiged";
import Login from "./components/Login";
import { useStore } from "./store/store";

function App() {
  //TODO: add user to store to save info
  //TODO: integrate user with firebase to detect which page appear
  //TODO: build widgets component
  const user = useStore();
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Wiged />
        </div>
      )}
    </div>
  );
}

export default App;
