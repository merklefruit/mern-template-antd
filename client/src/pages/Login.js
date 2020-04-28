import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";
import { Card, Form, Input, Button, Typography } from "antd";
import CustomAlert from "../components/CustomAlert";

import "../static/css/main.css";
import "../static/css/auth.css";

const { Title, Text } = Typography;

function Login({ login, isAuthenticated }) {
  const onFinish = values => {
    const { email, password } = values;
    login(email, password);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="login-parent wallpaper-login">
        <Card className="center-card login-card">
          <div className="form-container">
            <Title level={2}>Login</Title>
            <Form
              layout="vertical"
              name="login"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
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

              <div className="already-div">
                <Text>
                  Don't have an account?{" "}
                  <span className="bold">
                    <Link to="/register">Register</Link>
                  </span>
                </Text>
              </div>

              <Form.Item className="center">
                <Button type="primary" size="large" htmlType="submit" block>
                  Login
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
