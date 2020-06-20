import React from "react";
import { Avatar } from "antd";
import { UserName } from "../styleComponent/styleComponent";
import logo from "../images/logo.jpg"

const HeaderPage = (props) => {
  return (
    <div className="header">
      <div className="header-logo">
        <img
          src={logo}
          className="logo"
          alt="not found"
        />
      </div>
      <div className="avt">
        <div className="user-avt">
          <a className="avt-hover" href="# ">
            <Avatar src="https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" />
          </a>&nbsp;&nbsp;
          <UserName>My Trang</UserName>
        </div>
        <button type="submit">Log out</button>
      </div>
    </div>
  );
};

export default HeaderPage;
