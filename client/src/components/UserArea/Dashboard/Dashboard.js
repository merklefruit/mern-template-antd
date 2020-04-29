import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, Typography } from "antd";

import "../../../static/css/main.css";

const { Title } = Typography;

const Dashboard = ({ user: { username } }) => {
  return (
    <Fragment>
      <section id="welcome-user">
        <Card className="center">
          <Title level={3}>Welcome back, {username}</Title>
        </Card>
      </section>
      <section id="dashboard table"></section>
    </Fragment>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Dashboard);
