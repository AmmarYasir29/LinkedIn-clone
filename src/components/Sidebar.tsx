import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
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
        <Avatar className="sidebar__avatar" />
        <h1>Ammar Yasir</h1>
        <p>ammar@gmail.com</p>
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
