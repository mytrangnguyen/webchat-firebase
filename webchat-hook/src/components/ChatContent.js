import React from "react";
import {
  Wrapper,
  UserName,
  Text,
  Input,
} from "../styleComponent/styleComponent";
import { Avatar } from "antd";

function ChatContent(props) {
  return (
    <Wrapper primary>
      <div className="header-chat-form">
        <div className="group-name">
          <UserName>Tender App Group</UserName>
        </div>
        <div className="notification">
          <div className="icon">
            <i className="fa fa-bell"></i>
          </div>
          <div className="icon">
            <i className="fa fa-user"></i>
          </div>
          <div className="icon">
            <i className="fa fa-user"></i>
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
            <span className="time-left">My Trang 11:02</span>
          </div>
        </div>
        <div className="chat-box">
          <div className="avt-right">
            <Avatar src="https://icons.iconarchive.com/icons/webalys/kameleon.pics/512/Woman-9-icon.png" />
          </div>
          <div className="message-right">
            <Text>Hello. I am so good, right now. How about you?</Text>
            <span className="time-right">Bao Han 11:02</span>
          </div>
        </div>
        <div className="chat-box">
          <div className="avt-left">
            <Avatar src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" />
          </div>
          <div className="message-left">
            <Text>I have a fever so Im quite tired....  </Text>
            <span className="time-left">Duy Lam 11:02</span>
          </div>
        </div>
        <div className="chat-box">
          <div className="avt-right">
            <Avatar src="https://icons.iconarchive.com/icons/webalys/kameleon.pics/512/Woman-9-icon.png" />
          </div>
          <div className="message-right">
            <Text>Hello. I am so good, right now. How about you?</Text>
            <span className="time-right">Bao Han 11:02</span>
          </div>
        </div>
        <div className="chat-box">
          <div className="avt-left">
            <Avatar src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" />
          </div>
          <div className="message-left">
            <Text>I have a fever so Im quite tired....  </Text>
            <span className="time-left">Duy Lam 11:02</span>
          </div>
        </div>
        <div className="chat-box">
          <div className="avt-right">
            <Avatar src="https://icons.iconarchive.com/icons/webalys/kameleon.pics/512/Woman-9-icon.png" />
          </div>
          <div className="message-right">
            <Text>Hello. I am so good, right now. How about you?</Text>
            <span className="time-right">Bao Han 11:02</span>
          </div>
        </div>
        <div className="chat-box">
          <div className="avt-left">
            <Avatar src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" />
          </div>
          <div className="message-left">
            <Text>I have a fever so Im quite tired....  </Text>
            <span className="time-left">Duy Lam 11:02</span>
          </div>
        </div>
      </div>
      <div className="footer-chat-form">
        <div className="group-name">
          <Input type="text" placeholder="Write something.." />
        </div>
        <div className="notification">
          <div className="icon">
            <a href="# ">
              <i className="fa fa-paperclip"></i>
            </a>
          </div>
          <div className="icon">
            <a href="# ">
              <i className="fa fa-user"></i>
            </a>
          </div>
          <div className="icon">
            <a href="# ">
              <i className="fa fa-paper-plane"></i>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ChatContent;
