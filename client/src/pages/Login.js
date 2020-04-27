import React, { Fragment } from "react";
import { Card, Form, Input, Button, Typography } from "antd";

import "../css/main.css";
import "../css/auth.css";

const { Title } = Typography;

function Login() {
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Fragment>
      <div className="login-parent wallpaper">
        <Card className="center-card login-card">
          <div className="form-container">
            <Title level={2}>Login</Title>
            <Form
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

              <Form.Item className="center mt-6">
                <Button type="primary" size="large" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    </Fragment>
  );
}

export default Login;
