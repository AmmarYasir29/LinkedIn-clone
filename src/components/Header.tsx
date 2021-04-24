import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../styles/header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
          alt="logo"
        />

        <div className="search_input">
          <SearchIcon />
          <input type="search" name="" id="" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="Home" />
        <HeaderOption Icon={ChatIcon} title="My Network" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption avatar="http://placekitten.com/200/300" title="Me" />
      </div>
    </div>
  );
};

export default Header;
