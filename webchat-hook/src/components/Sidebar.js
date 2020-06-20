import React from "react";
import { Wrapper, UserName } from "../styleComponent/styleComponent";
import { Avatar } from "antd";
function Sidebar(props) {
  return (
    <Wrapper>
        
      <div className="left-icon">
        <div className="avt">
          <Avatar src="https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" />
        </div>
        <UserName>My Trang</UserName>
      </div>
      <div className="left-icon bottom-icon">
        <div className="item-icon">
          <i className="fa fa-tags fa-icon"></i>
        </div>
        <div className="item-icon">
          <i className="fa fa-users fa-icon"></i>
        </div>
      </div>
      <div className="left-icon top-icon">
        <div className="item-icon">
          <i className="fa fa-line-chart fa-icon" aria-hidden="true"></i>
        </div>
        <div className="item-icon">
          <i className="fa fa-pie-chart fa-icon" aria-hidden="true"></i>
        </div>
        <div className="item-icon">
          <i className="fa fa-wrench fa-icon"></i>
        </div>
        <div className="item-icon">
          <i className="fa fa-power-off fa-icon" aria-hidden="true"></i>
        </div>
      </div>
    </Wrapper>
  );
}

export default Sidebar;
