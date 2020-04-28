import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Form, Input, Button, Typography } from "antd";
import CustomAlert from "../components/CustomAlert";

import "../css/main.css";
import "../css/auth.css";

const { Title, Text } = Typography;

function Login() {
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

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
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" }
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

export default Login;
