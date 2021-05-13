import { Avatar } from "@material-ui/core";
import React, { ReactElement, ReactNode } from "react";
import ImageIcon from "@material-ui/icons/Image";
import "../styles/feed.css";
import FeedOption from "./FeedOption";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__addPost">
        <div className="feed__input">
          <Avatar className="feed__img" alt="photo" src="" />
          <input type="text" name="" id="" placeholder="start a post" />
        </div>
        <div className="feed__addMidea">
          <FeedOption Icon={ImageIcon} title="Photo" color="blue"/>
          <FeedOption Icon={ImageIcon} title="photo" color="blue"/>
          <FeedOption Icon={ImageIcon} title="photo" color="blue"/>
          <FeedOption Icon={ImageIcon} title="photo" color="blue"/>
        </div>
      </div>
      <div className="feed__post">Posts</div>
    </div>
  );
};

export default Feed;
