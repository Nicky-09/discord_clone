import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/alertActions";

const AlertNotification = ({
  showAlertMesssage,
  closeAlertMessage,
  alertMessageContent,
}) => {
  console.log({ showAlertMesssage, alertMessageContent, closeAlertMessage });
  return (
    <Snackbar
      open={showAlertMesssage}
      autoHideDuration={6000}
      onClose={closeAlertMessage}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity="error">{alertMessageContent}</Alert>
    </Snackbar>
  );
};

const mapStoreStateToProps = ({ alert }) => {
  return {
    ...alert,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(
  mapStoreStateToProps,
  mapActionsToProps
)(AlertNotification);
