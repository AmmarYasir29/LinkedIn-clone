import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "../styles/widgt.css";

const Widget = () => {
  const addNews = (header: string, description: string) => {
    return (
      <div className="widgte__article">
        <div className="widget__articleLift">
          <FiberManualRecordIcon />
        </div>
        <div className="widget__articleRight">
          <h2>{header}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widget__header">
        <h3>Linkedin News</h3>
        <InfoIcon />
      </div>
      {addNews("jsut header", "here is the description")}
      {addNews("jsut header", "here is the description")}
      {addNews("jsut header", "here is the description")}
      {addNews("jsut header", "here is the description")}
    </div>
  );
};

export default Widget;
