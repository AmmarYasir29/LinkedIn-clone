import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/post.css";
import FeedOption from "./FeedOption";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
const Post = ({
  name,
  description,
  message,
}: {
  name: string;
  description: string;
  message: string;
}) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>name</h2>
          <p>descrioption</p>
        </div>
      </div>
      <div className="post__body">message here</div>
      <div className="post__icon">
        <FeedOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
        <FeedOption Icon={ThumbUpAltIcon} title="Share" color="gray" />
        <FeedOption Icon={ThumbUpAltIcon} title="Comment" color="gray" />
        <FeedOption Icon={ThumbUpAltIcon} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default Post;
