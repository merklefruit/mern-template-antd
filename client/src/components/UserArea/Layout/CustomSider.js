import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";

import "../../../static/css/main.css";
import "../../../static/css/layout.css";
import { DashboardOutlined, ProfileOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

const CustomSider = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Menu mode="inline" theme="dark">
      <SubMenu
        key="sub1"
        title={
          <span>
            <span>
              <DashboardOutlined /> Dashboard
            </span>
          </span>
        }
      >
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <span>
              <ProfileOutlined /> Profile
            </span>
          </span>
        }
      >
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </SubMenu>
      <Menu.Item key="3">
        <span style={{ cursor: "pointer" }} onClick={() => logout()}>
          Logout
        </span>
      </Menu.Item>
    </Menu>
  );

  const guestLinks = (
    <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
      <Menu.Item key="1">
        <Link to="/" style={{ color: "white" }}>
          How it Works
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/" style={{ color: "white" }}>
          About us
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/login" style={{ color: "white" }}>
          Login
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/register" style={{ color: "white" }}>
          Sign up
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Sider className="mobile-only sider">
      <div className="mobile-only mobile-menu">
        {!loading && isAuthenticated && authLinks}

        {!loading && !isAuthenticated && guestLinks}
      </div>
    </Sider>
  );
};

CustomSider.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(CustomSider);
