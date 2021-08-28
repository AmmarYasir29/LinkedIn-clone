import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import "../styles/sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const recent = (title: string) => {
    return (
      <div className="recent">
        <span className="hashtag">#</span>
        <p>{title}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="http://placekitten.com/g/600/300" alt="" />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0].toUpperCase()}
        </Avatar>
        <h1>{user.dispalyName}</h1>
        <p>{user.email}</p>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="number">27</p>
        </div>
        <div className="sidebar__stat">
          <p>Views of your post</p>
          <p className="number">27233</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p className="sidebar__bottom__title">Recent</p>
        <div>
          {recent("hashtag")}
          {recent("hashtag")}
          {recent("hashtag")}
          {recent("hashtag")}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
