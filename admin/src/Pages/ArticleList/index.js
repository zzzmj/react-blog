import React from 'react'
import { Table, Tag, Button } from 'antd';
import './style.css'


const columns = [
  {
    title: '文章标题',
    dataIndex: 'title',
    key: 'title',
    render: text => <a>{text}</a>,
  },
  {
    title: '发布时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '分类',
    dataIndex: 'categories',
    key: 'categories',
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button style={{ marginRight: 16 }} type="default">编辑</Button>
        <Button type="danger">删除</Button>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    title: 'John Brown',
    time: 32,
    categories: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    title: 'Jim Green',
    time: 42,
    categories: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    title: 'Joe Black',
    time: 32,
    categories: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const ArticleList = () => {

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ArticleList