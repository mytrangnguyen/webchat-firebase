import React from "react";
import {
  Wrapper,
  Title,
  Container,
  UserName,
  ItemIcon,
} from "../styleComponent/styleComponent";
import { Avatar, List } from "antd";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import ListItem from "./ListItem";

const data = [
  {
    title: "Ant Design Title 1",
    avatar:
      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",
  },
  {
    title: "Ant Design Title 2",
    avatar:
      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",
  },
  {
    title: "Ant Design Title 3",
    avatar:
      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",
  },
  {
    title: "Ant Design Title 4",
    avatar:
      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",
  },
];

const dataList1 = ["Work", "Freelance", "Personal"];
const dataList2 = ["Project Manager", "Designers", "Developers"];

function LeftContent(props) {
  const renderItem = (item) => {
    console.log("tat", item);

    return <ListItem data={item} />;
  };

  const renderItemList = (item) =>{
      return 
  }

  return (
    <Wrapper>
      <Container>
        <div className="left-icon">
          <Avatar src="https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" />
          <UserName>My Trang</UserName>
        </div>
        <div className="right-list">
          <Title>NETWORK</Title>
          <List
            size="small"
            dataSource={dataList1}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </Container>
      <Container>
        <div className="left-icon">
          <div className="item-icon">
            <SettingOutlined key="setting" />
          </div>
          <div className="item-icon">
            <EditOutlined key="edit" />
          </div>
        </div>
        <div className="right-list">
          <Title>ROOMS</Title>
          <List
            size="small"
            dataSource={dataList2}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </Container>
      <Container>
        <div className="left-icon">
          <div className="item-icon">
            <SettingOutlined key="setting" />
          </div>
          <div className="item-icon">
            <EditOutlined key="edit" />
          </div>
          <div className="item-icon">
            <SettingOutlined key="setting" />
          </div>
          <div className="item-icon">
            <EditOutlined key="edit" />
          </div>
        </div>
        <div className="right-list">
          <Title>ON HAND TALK</Title>
          <List
            itemLayout="horizontal"
            dataSource={data}
            // renderItem={(item) => (
            //   <List.Item>
            //     <List.Item.Meta
            //       avatar={
            //         <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            //       }
            //       title={<a href="https://ant.design">{item.title}</a>}
            //       description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            //     />
            //   </List.Item>
            // )}
            renderItem={(item) => renderItem(item)}
          />
        </div>
      </Container>
    </Wrapper>
  );
}

export default LeftContent;
