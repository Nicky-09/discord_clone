import React from "react";
import CustomButton from "../../shared/components/CustomButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useHistory } from "react-router-dom";
import { Tooltip } from "@mui/material";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const history = useHistory();

  const handlepushtoRegister = () => {
    history.push("/register");
  };

  const getFormNotValidMsg = () => {
    return "Please fill in all the fields";
  };

  const getFormValidMsg = () => {
    return "Press to login";
  };

  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValidMsg() : getFormValidMsg()}>
        <div>
          <CustomButton
            label="Login"
            onClick={handleLogin}
            disabled={!isFormValid}
          />
          <RedirectInfo
            text="Need an account? "
            redirectText="Create an account"
            addStyles={{ marginTop: "5px" }}
            redirectHandler={handlepushtoRegister}
          />
        </div>
      </Tooltip>
    </>
  );
};

export default LoginPageFooter;
