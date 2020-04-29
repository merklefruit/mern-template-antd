import React from "react";
import { Spin } from "antd";

import "../../../static/css/layout.css";

const Loading = () => {
  return (
    <div className="center spinner">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
