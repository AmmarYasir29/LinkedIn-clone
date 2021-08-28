import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import "../styles/headerOption.css";
const HeaderOption = ({
  Icon,
  avatar,
  title,
  onclick,
}: {
  Icon?: any;
  avatar?: any;
  title: string;
  onclick?: any;
}) => {
  const user = useSelector(selectUser);
  return (
    <div className="headerOption" onClick={onclick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
