import React from 'react';
import {List} from 'antd';

function MenuList(props) {
    return (
        <List
        size="small"
        dataSource={this.props.dataList}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    );
}

export default MenuList;