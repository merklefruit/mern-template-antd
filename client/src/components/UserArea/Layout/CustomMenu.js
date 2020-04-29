import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";

import { LOGO } from "../../../helpers/config";
import { DashboardOutlined, ProfileOutlined } from "@ant-design/icons";
import "../../../static/css/main.css";
import "../../../static/css/layout.css";

const CustomMenu = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Menu className="menu" theme="dark" mode="horizontal">
      <Menu.Item className="logo-item">
        <Link to="/dashboard" style={{ color: "white" }}>
          {LOGO}
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/dashboard" style={{ color: "white" }}>
          <DashboardOutlined /> Dashboard
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/profile" style={{ color: "white" }}>
          <ProfileOutlined /> Profile
        </Link>
      </Menu.Item>
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
        <Link to="/">{LOGO}</Link>
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
