/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React, { Fragment } from "react";
import { enquireScreen } from "enquire-js";
import { Card } from "antd";

import Nav0 from "./Components/Nav0";
import Footer0 from "./Components/Footer0";

import { Nav00DataSource, Footer00DataSource } from "./Components/data.source";
import "../../static/less/antMotionStyle.less";

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

const { location } = window;

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port
    };
  }

  componentDidMount() {
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true
        });
      }, 1);
    }
  }

  render() {
    const children = [
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Fragment key="main-content">
        <Card className="center">
          This is the PRODUCT PAGE content. (Product 1). <br />
          Please refer to src/components/GuestArea/Product.js
        </Card>
      </Fragment>,
      <Footer0
        id="Footer0_0"
        key="Footer0_0"
        dataSource={Footer00DataSource}
        isMobile={this.state.isMobile}
      />
    ];
    return (
      <div
        className="templates-wrapper"
        ref={d => {
          this.dom = d;
        }}
      >
        {this.state.show && children}
      </div>
    );
  }
}
