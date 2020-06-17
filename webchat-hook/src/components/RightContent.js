import React from "react";
import { Wrapper, Text, Title } from "../styleComponent/styleComponent";
import { Card } from "antd";
import History from './History'

const { Meta } = Card;
const data = [
    {
        time: "About 1 hour ago",
        content: "Mỹ Trang đã cập nhật ảnh đại diện của cô ấy"

    },
    {
        time: "About 2 hour ago",
        content: "Mỹ Trang đã cập nhật ảnh đại diện của cô ấy"

    },
    {
        time: "About 3 hour ago",
        content: "Mỹ Trang đã cập nhật ảnh đại diện của cô ấy"

    }
]
function RightContent(props) {
  return (
    <Wrapper>
      <div className="user-infor">
        <div className="card">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Mi Lan" description="Mumbai India" />
          </Card>
        </div>
        <div className="user-description">
          <Text>
            In this example, the image will float to the right in the paragraph,
            and the text in the paragraph will wrap around the image
          </Text>
        </div>
      </div>
      <div className="chat-history">
        <div className="history-title">
          <Title>Chat history</Title>
        </div>
        {
            data.map((item)=><History time={item.time} content={item.content} />)
        }
      </div>
    </Wrapper>
  );
}

export default RightContent;
