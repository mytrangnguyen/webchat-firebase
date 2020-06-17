import React from "react";
import {
  Wrapper,
  UserName,
  Text,
  Input,
} from "../styleComponent/styleComponent";
import { Avatar, List } from "antd";

function ChatContent(props) {
  return (
    <Wrapper primary>
      <div className="header-chat-form">
        <div className="group-name">
          <UserName>Tender App Group</UserName>
        </div>
        <div className="notification">
          <div className="icon">
            <i class="fa fa-bell"></i>
          </div>
          <div className="icon">
            <i class="fa fa-user"></i>
          </div>
          <div className="icon">
            <i class="fa fa-user"></i>
          </div>
        </div>
      </div>
      <div className="name-member">
        <div className="avt-name-member">
          <Avatar src="https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" />
        </div>
        <div className="avt-name-member">
          <Avatar src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" />
        </div>
        <div className="avt-name-member">
          <Avatar src="https://icons.iconarchive.com/icons/webalys/kameleon.pics/512/Woman-9-icon.png" />
        </div>
      </div>
      <div className="chat-content">
        <div className="chat-box">
          <div className="avt-left">
            <Avatar src="https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" />
          </div>
          <div className="message-left">
            <Text>Hello. How are you today?</Text>
          </div>
        </div>
        <div className="chat-box">
          <div className="message-right">
            <Text>Hello. How are you today?</Text>
          </div>
          <div className="avt-right">
            <Avatar src="https://icons.iconarchive.com/icons/webalys/kameleon.pics/512/Woman-9-icon.png" />
          </div>
        </div>
        <div className="chat-box">
          <div className="avt-left">
            <Avatar src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" />
          </div>
          <div className="message-left">
            <Text>Hello. How are you today?</Text>
          </div>
        </div>
      </div>
      <div className="footer-chat-form">
        <div className="group-name">
          <Input type="text" placeholder="Write something.." />
        </div>
        <div className="notification">
          <div className="icon">
            <i class="fa fa-paperclip"></i>
          </div>
          <div className="icon">
            <i class="fa fa-user"></i>
          </div>
          <div className="icon">
            <i class="fa fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ChatContent;
