import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { Card, Form, Input, Button, Typography, Breadcrumb } from "antd";
import CustomAlert from "../UserArea/Layout/CustomAlert";

import "../../static/css/main.css";
import "../../static/css/auth.css";
import { HomeOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { Item } = Breadcrumb;

function Register({ setAlert, register, isAuthenticated }) {
  const onFinish = values => {
    const { username, email, password, password2 } = values;
    if (password !== password2) {
      setAlert("Passowrds do not match", "", "error", 2500);
    } else {
      register({ username, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="login-parent wallpaper-register">
        <Card className="center-card login-card">
          <Breadcrumb>
            <Item>
              <Link to="/">
                <HomeOutlined /> Home
              </Link>
            </Item>
            <Item>
              <Link to="/register">Register</Link>
            </Item>
          </Breadcrumb>
          <div className="form-container">
            <Form layout="vertical" name="login" onFinish={onFinish}>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username" }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input a valid email address"
                  }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password" }
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Repeat Password"
                name="password2"
                rules={[
                  {
                    required: true,
                    message: "Please input your password again"
                  }
                ]}
              >
                <Input.Password />
              </Form.Item>

              <div className="already-div">
                <Text>
                  Already have an account?{" "}
                  <span className="bold">
                    <Link to="/login">Login</Link>
                  </span>
                </Text>
              </div>

              <Form.Item className="center">
                <Button type="primary" size="large" htmlType="submit" block>
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
          <CustomAlert />
        </Card>
      </div>
    </Fragment>
  );
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
