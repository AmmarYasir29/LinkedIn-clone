import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "../styles/post.css";
import FeedOption from "./FeedOption";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
const Post = forwardRef(
  (
    {
      name,
      description,
      message,
      photoUrl,
    }: {
      name: string;
      description: string;
      message: string;
      photoUrl: any;
    },
    ref: any
  ) => {
    return (
      <div ref={ref} className="post">
        <div className="post__header">
          <Avatar src={photoUrl}>{name[0]} </Avatar>
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post__body">{message}</div>
        <div className="post__icon">
          <FeedOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
          <FeedOption Icon={ThumbUpAltIcon} title="Share" color="gray" />
          <FeedOption Icon={ThumbUpAltIcon} title="Comment" color="gray" />
          <FeedOption Icon={ThumbUpAltIcon} title="Send" color="gray" />
        </div>
      </div>
    );
  }
);

export default Post;
