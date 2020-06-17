import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

import LeftContent from "../components/LeftContent";
import ChatContent from "../components/ChatContent";
import RightContent from "../components/RightContent";
function Chat(props) {
  return (
    <Row>
      <Col span={6}>
        <LeftContent />
      </Col>
      <Col span={14}>
        <ChatContent />
      </Col>
      <Col span={4}>
        <RightContent />
      </Col>
    </Row>
  );
}

export default Chat;
