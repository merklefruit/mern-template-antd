import React, { Fragment } from "react";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import PropTypes from "prop-types";
import { Card, Form, Input, Button, Typography } from "antd";
import CustomAlert from "../components/CustomAlert";

import "../css/main.css";
import "../css/auth.css";

const { Title } = Typography;

function Register({ setAlert }) {
  const onFinish = async values => {
    const { username, email, password1, password2 } = values;
    if (password1 !== password2) {
      setAlert("Passowrds don't match", "", "error", 2500);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Fragment>
      <div className="login-parent wallpaper-register">
        <Card className="center-card login-card">
          <div className="form-container">
            <Title level={2}>Register</Title>
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
                name="password1"
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

              <Form.Item className="center mt-6">
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
  setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Register);
