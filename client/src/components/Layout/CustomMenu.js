import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import { LOGO } from "../../helpers/config";
import { DashboardOutlined, ProfileOutlined } from "@ant-design/icons";
import "../../static/css/main.css";
import "../../static/css/layout.css";

const { SubMenu } = Menu;

const CustomMenu = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Menu className="menu" theme="dark" mode="horizontal">
      <Menu.Item className="logo-item">{LOGO}</Menu.Item>
      <SubMenu
        title={
          <>
            <Link to="/dashboard" style={{ color: "white" }}>
              <DashboardOutlined /> Dashboard
            </Link>
          </>
        }
      >
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
      </SubMenu>
      <SubMenu
        title={
          <>
            <Link to="/profile" style={{ color: "white" }}>
              <ProfileOutlined /> Profile
            </Link>
          </>
        }
      >
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
      </SubMenu>
      <div className="tail-menu">
        <span
          type="primary"
          onClick={() => logout()}
          style={{ color: "white", cursor: "pointer" }}
        >
          Logout
        </span>
      </div>
    </Menu>
  );

  const guestLinks = (
    <Menu className="menu" theme="dark" mode="horizontal">
      <Menu.Item className="logo-item" style={{ color: "white" }}>
        {LOGO}
      </Menu.Item>
      <Menu.Item>
        <Link to="/" style={{ color: "white" }}>
          How it works
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/" style={{ color: "white" }}>
          About us
        </Link>
      </Menu.Item>

      <span className="tail-menu">
        <Link to="/login" style={{ color: "white" }}>
          Login
        </Link>
        <Link to="/register" style={{ marginLeft: 10 }}>
          <Button type="primary">Sign up!</Button>
        </Link>
      </span>
    </Menu>
  );

  return (
    <div className="container" style={{ position: "relative" }}>
      {!loading && isAuthenticated && authLinks}

      {!loading && !isAuthenticated && guestLinks}
    </div>
  );
};

CustomMenu.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(CustomMenu);
