import React from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";

import "../css/main.css";
import "../css/layout.css";

const { Header, Content, Footer, Sider } = Layout;

// Easy customizable variables:
const Author = "Nicolas Racchi";
const Logo = "Logo";

function PageLayout({ children }) {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1">
            <UserOutlined />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <VideoCameraOutlined />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <UploadOutlined />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <UserOutlined />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background header-div">
          <div className="logo-div lead">{Logo}</div>
        </Header>
        <Content className="content-div">
          <div className="site-layout-background">{children}</div>
        </Content>
        <Footer className="center">&copy; 2020 – {Author}</Footer>
      </Layout>
    </Layout>
  );
}

export default PageLayout;
