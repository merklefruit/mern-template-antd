import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import CustomAlert from "./CustomAlert";
import CustomSider from "./CustomSider";
import CustomMenu from "./CustomMenu";

import "../../../static/css/main.css";
import "../../../static/css/layout.css";
import { LOGO, AUTHOR } from "../../../helpers/config";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

function PageLayout({ children }) {
  const [collapsed, collapse] = useState(true);

  return (
    <Layout>
      {!collapsed && <CustomSider />}
      <Layout>
        {/* HEADER */}
        <Header className="center-header">
          <CustomMenu />
          <div className="mobile-only logo">
            <div
              className="mobile-menu-icon"
              onClick={() => collapse(!collapsed)}
            >
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
              )}
            </div>
            <Link to="/">{LOGO}</Link>
          </div>
        </Header>

        {/* CONTENT */}
        <Content className="content-div">
          <div className="container">
            <div className="alert-container">
              <CustomAlert />
            </div>
            <div>{children}</div>
          </div>
        </Content>

        {/* FOOTER */}
        <Footer className="center footer">&copy; 2020 – {AUTHOR}</Footer>
      </Layout>
    </Layout>
  );
}

export default PageLayout;
