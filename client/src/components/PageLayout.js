import React, { useState } from "react";
import { Layout, Menu } from "antd";
import CustomAlert from "./CustomAlert";
import CustomSider from "./CustomSider";

import "../static/css/main.css";
import "../static/css/layout.css";
import { LOGO, AUTHOR } from "../helpers/config";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

function PageLayout({ children }) {
  const [collapsed, collapse] = useState(true);
  return (
    <Layout>
      {!collapsed && <CustomSider />}
      <Layout>
        <Header className="center-header">
          <div className="container">
            <Menu className="menu" theme="dark" mode="horizontal">
              <Menu.Item className="logo-item">{LOGO}</Menu.Item>
              <SubMenu
                title={
                  <>
                    <DashboardOutlined /> Ciao
                  </>
                }
              >
                <Menu.Item>Item 1</Menu.Item>
                <Menu.Item>Item 1</Menu.Item>
                <Menu.Item>Item 1</Menu.Item>
              </SubMenu>
              <SubMenu
                title={
                  <>
                    <DashboardOutlined /> Ciao
                  </>
                }
              >
                <Menu.Item>Item 1</Menu.Item>
                <Menu.Item>Item 1</Menu.Item>
                <Menu.Item>Item 1</Menu.Item>
              </SubMenu>
              <SubMenu
                title={
                  <>
                    <DashboardOutlined /> Ciao
                  </>
                }
              >
                <Menu.Item>Item 1</Menu.Item>
                <Menu.Item>Item 1</Menu.Item>
                <Menu.Item>Item 1</Menu.Item>
              </SubMenu>
              <SubMenu
                title={
                  <>
                    <DashboardOutlined /> Ciao
                  </>
                }
              >
                <Menu.Item>Item 1</Menu.Item>
                <Menu.Item>Item 1</Menu.Item>
                <Menu.Item>Item 1</Menu.Item>
              </SubMenu>
            </Menu>
          </div>

          <div className="mobile-only logo">
            <div
              className="mobile-menu-icon"
              onClick={() => collapse(!collapsed)}
            >
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
              )}
            </div>
            {LOGO}
          </div>
        </Header>

        <Content className="content-div">
          <div className="container">
            <div className="alert-container">
              <CustomAlert />
            </div>
            <div>{children}</div>
          </div>
        </Content>
        <Footer className="center footer">&copy; 2020 – {AUTHOR}</Footer>
      </Layout>
    </Layout>
  );
}

export default PageLayout;
