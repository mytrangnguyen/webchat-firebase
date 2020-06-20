import React from "react";
import { Wrapper, Title, Container } from "../styleComponent/styleComponent";
import { List } from "antd";
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
    return <ListItem data={item} />;
  };

  return (
    <Wrapper>
      <Container>
        <div className="right-list">
          <div className="title-page">
            <Title>NETWORK </Title>
            <span className="plus">
              <i className="fa fa-plus"></i>
            </span>
          </div>

          <List
            size="small"
            dataSource={dataList1}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </Container>
      <Container>
        <div className="right-list">
          <div className="title-page">
            <Title>ROOMS</Title>
            <span className="plus">
              <i className="fa fa-plus"></i>
            </span>
          </div>
          <List
            size="small"
            dataSource={dataList2}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </Container>
      <Container>
        <div className="right-list">
          <div className="title-page">
            <Title>ON HAND TALK</Title>
            <span className="plus">
              <i className="fa fa-plus"></i>
            </span>
          </div>

          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => renderItem(item)}
          />
        </div>
      </Container>
    </Wrapper>
  );
}

export default LeftContent;
