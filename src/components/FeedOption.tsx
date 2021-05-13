import React from "react";
import "../styles/feedOption.css";

const FeedOption = ({
  Icon,
  title,
  color,
}: {
  Icon: any;
  title: string;
  color: string;
}) => {
  return (
    <div className="feedoption">
      <div className="feedOption__option">
        <Icon style={{ color }} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default FeedOption;
