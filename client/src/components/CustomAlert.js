import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert } from "antd";

const CustomAlert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <Alert
      style={{ marginBottom: 10 }}
      key={alert.id}
      message={alert.msg}
      description={alert.desc}
      type={alert.alertType}
      showIcon
    />
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(CustomAlert);
