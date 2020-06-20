import React from "react";
import { List, Avatar } from "antd";

function History({ data }) {
  return (
    <List.Item>
      <List.Item.Meta
        className="list-user"
        avatar={<Avatar src={data.avatar} />}
        title={<a href="# ">{data.name}</a>}
        description="Online"
      />
    </List.Item>
  );
}

export default History;
