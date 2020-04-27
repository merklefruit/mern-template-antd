import React from "react";
import { Layout } from "antd";
import SideMenu from "./SideMenu";
import CustomAlert from "../components/CustomAlert";

import "../css/main.css";
import "../css/layout.css";
import { LOGO, AUTHOR } from "../helpers/config";

const { Header, Content, Footer } = Layout;

// Easy customizable variables:
const Author = AUTHOR;
const Logo = LOGO;

function PageLayout({ children }) {
  return (
    <Layout>
      <SideMenu />
      <Layout>
        <Header className="site-layout-sub-header-background header-div">
          <div className="logo-div lead">{Logo}</div>
        </Header>
        <CustomAlert />
        <Content className="content-div">
          <div className="site-layout-background">{children}</div>
        </Content>
        <Footer className="center">&copy; 2020 – {Author}</Footer>
      </Layout>
    </Layout>
  );
}

export default PageLayout;
