import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const RegisterPageInputs = (props) => {
  const { email, setEmail, password, setPassword, username, setUsername } =
    props;
  return (
    <>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label="Email"
        type="email"
        placeholder="Enter your email"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter your username"
      />
    </>
  );
};

export default RegisterPageInputs;
