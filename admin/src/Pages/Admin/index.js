import React, { useState } from 'react'
import { Layout, Menu, Row, Col } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from '@ant-design/icons';
import './style.css'
import AddArticle from '../AddArticle';
import ArticleList from '../ArticleList';
import Categories from '../Categories';


const { Header, Content, Footer, Sider } = Layout;

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [selectMenuItem, setSelectMenuItem] = useState('1')
  const sideList = ['仪表盘', '发布文章', '文章管理', '分类管理', '留言管理']

  const onCollapse = collapsed => {
    console.log('折叠属性', collapsed)
    setCollapsed({ collapsed })
  };

  const onClickMenu = e => {
    const { key } = e
    console.log('key', key)
    setSelectMenuItem(key)
  }


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">
          <div className="logo-icon">
            <img src="https://pic.downk.cc/item/5e7ca081504f4bcb04bb5a97.png" alt="" />
            {
              !collapsed && <h2>Morty Blog</h2>
            }
          </div>
        </div>

        <Menu 
          className="morty-menu" 
          theme="dark" 
          defaultSelectedKeys={['1']} 
          mode="inline"
          onClick={onClickMenu}
        >
          <Menu.Item className="morty-menu-item" key="0">
            <PieChartOutlined />
            <span>仪表盘</span>
          </Menu.Item>
          <Menu.Item className="morty-menu-item" key="1">
            <DesktopOutlined />
            <span>发布文章</span>
          </Menu.Item>
          <Menu.Item className="morty-menu-item" key="2">
            <FileOutlined />
            <span>文章管理</span>
          </Menu.Item>
          <Menu.Item className="morty-menu-item" key="3">
            <FileOutlined />
            <span>分类管理</span>
          </Menu.Item>
          <Menu.Item className="morty-menu-item" key="4">
            <FileOutlined />
            <span>留言管理</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="morty-header site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <h4 style={{ 
            margin: '16px 0',    
            fontWeight: 600,
            fontSize: '16px' 
          }}>
            {sideList[selectMenuItem]}
          </h4>
          <div className="site-layout-background" style={{ minHeight: 360 }}>
            { selectMenuItem == 1 && <AddArticle />}
            { selectMenuItem == 2 && <ArticleList />}
            { selectMenuItem == 3 && <Categories />}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default Admin