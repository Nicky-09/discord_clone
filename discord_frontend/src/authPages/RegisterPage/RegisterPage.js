import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AuthBox from "../../shared/components/AuthBox";
import { validateRegisterForm } from "../../shared/utils/validators";
import { getActions } from "../../store/actions/authActions";
import RegisterPageFooter from "./RegisterPageFooter";
import RegisterPageInputs from "./RegisterPageInputs";
import { useHistory } from "react-router-dom";

const RegisterPage = ({ register }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ email, password, username }));
  }, [email, password, username, isFormValid]);

  const handleRegister = () => {
    const userDetails = {
      email,
      password,
      username,
    };
    register(userDetails, history);
  };

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "#fff" }}>
        Register
      </Typography>
      <RegisterPageInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
      <RegisterPageFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(RegisterPage);
