import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";

const { Sider } = Layout;

function SideMenu() {
  return (
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
  );
}

export default SideMenu;
