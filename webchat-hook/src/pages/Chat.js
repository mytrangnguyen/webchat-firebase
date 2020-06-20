import React from "react";
import { Row, Col, Layout } from "antd";
import "antd/dist/antd.css";
// import LeftContent from "../components/LeftContent";
import ChatContent from "../components/ChatContent";
import RightContent from "../components/RightContent";
import HeaderPage from "../components/HeaderPage";
// import Sidebar from "../components/Sidebar";

const { Header, Content } = Layout;

function Chat(props) {
  return (
    <Layout>
      <Header>
        <HeaderPage />
      </Header>
      <Content>
        <Row>
          {/* <Col span={1}>
            <Sidebar />
          </Col>
          <Col span={5}>
            <LeftContent />
          </Col> */}
          <Col span={18}>
            <ChatContent />
          </Col>
          <Col span={6}>
            <RightContent />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default Chat;
