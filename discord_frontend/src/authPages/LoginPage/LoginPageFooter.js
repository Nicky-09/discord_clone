import React from "react";
import CustomButton from "../../shared/components/CustomButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useHistory } from "react-router-dom";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const history = useHistory();

  const handlepushtoRegister = () => {
    history.push("/register");
  };

  return (
    <>
      <div>
        <CustomButton
          label="Login"
          onClick={handleLogin}
          disabled={!isFormValid}
        />
        <RedirectInfo
          text="Need an account? "
          redirectText="Create an account"
          addStyles={{ marginTop: "10px" }}
          redirectHandler={handlepushtoRegister}
        />
      </div>
    </>
  );
};

export default LoginPageFooter;
