import React from "react";
import { Wrapper, Text, Title } from "../styleComponent/styleComponent";
import { Card, List } from "antd";
import UserList from "./UserList";
import { useSelector } from "react-redux";

const { Meta } = Card;
const data = [
  {
    name: "Bao Ngoc",
    avatar:
      "https://petnhatrang.com/wp-content/uploads/2019/04/4-8-689x400.jpg",
  },
  {
    name: "Bao Han",
    avatar:
      "https://i.pinimg.com/originals/53/57/4b/53574b40f2caccb3f69a929e176f5d7a.jpg",
  },
  {
    name: "Gia Bao",
    avatar:
      "https://i0.wp.com/bestlifeonline.com/content/uploads/2018/06/corgi-surprised-1-1024x1019.jpg",
  },
  {
    name: "Ngoc Duy",
    avatar:
      "https://i.pinimg.com/originals/a4/99/da/a499da39d8439206619d56537d857d99.jpg",
  },
  {
    name: "Ngoc Huy",
    avatar:
      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",
  },
  {
    name: "My Linh",
    avatar:
      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",
  },
  {
    name: "Duy Lam",
    avatar:
      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",
  },
  {
    name: "My Trang",
    avatar:
      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",
  },
];

const RightContent = (props) => {
  const userLogin = useSelector((state) => state.user.userLogin);
  const renderItem = (item) => {
    return <UserList data={item} />;
  };
  return (
    <Wrapper>
      <div className="user-infor">
        <div className="card">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={userLogin.img} />}
          >
            <Meta title={userLogin.name} description="Mumbai India" />
          </Card>
        </div>
        <div className="user-description">
          <Text>Win yourself first - Keep moving forward</Text>
        </div>
      </div>
      <div className="chat-history">
        <div className="history-title">
          <Title>List of user</Title>
        </div>
        <List
          className="list-active-user"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => renderItem(item)}
        />
      </div>
    </Wrapper>
  );
};

export default RightContent;
