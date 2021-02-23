import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { List, Button, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';

const FollowList = ({ header, data }) => {
    const listStyle = useMemo(() => ({ marginBottom: 20 }), []);
    const loadMoreStyle = useMemo(() => ({ textAlign: 'center', margin: '10px 0' }), []);
    const ListItemStyle = useMemo(() => ({ marginTop: 20 }), []);
    return (
        <List
            style={listStyle}
            grid={{ gutter: 4, xs: 2, md: 3 }}
            size="small"
            header={<div>{header}</div>}
            loadMore={<div style={loadMoreStyle}><Button>더 보기</Button></div>}
            bordered
            dataSource={data}
            // data배열의 요소가 item이됨
            renderItem={(item) => (
                <List.Item style={ListItemStyle}>
                    <Card actions={[<StopOutlined key="stop" />]}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                </List.Item>
            )}
        />
    );
};

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};
export default FollowList;
