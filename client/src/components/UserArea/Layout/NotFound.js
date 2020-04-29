import React from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, this page does not exist."
      extra={
        <Link to="/">
          <Button type="primary" size="large">
            Home
          </Button>
        </Link>
      }
    />
  );
}

export default NotFound;
