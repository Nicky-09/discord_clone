import React from "react";
import CustomButton from "../../shared/components/CustomButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useHistory } from "react-router-dom";
import { Tooltip } from "@mui/material";

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const history = useHistory();

  const handlepushtoLogin = () => {
    history.push("/login");
  };

  const getFormNotValidMsg = () => {
    return "Please fill in all the fields";
  };

  const getFormValidMsg = () => {
    return "Press to register";
  };

  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValidMsg() : getFormValidMsg()}>
        <div>
          <CustomButton
            label="Login"
            onClick={handleRegister}
            disabled={!isFormValid}
          />
          <RedirectInfo
            text="Need an account? "
            redirectText="Already have an account? "
            addStyles={{ marginTop: "5px" }}
            redirectHandler={handlepushtoLogin}
          />
        </div>
      </Tooltip>
    </>
  );
};

export default RegisterPageFooter;
