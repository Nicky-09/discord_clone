import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
});

const Label = styled("label")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontSize: "12px",
  fontWeight: "bold",
  marginBottom: "5px",
});

const Input = styled("input")({
  backgroundColor: "#2f3136",
  border: "1px solid black",
  borderRadius: "5px",
  color: "#dcddde",
  fontSize: "16px",
  flexGrow: 1,
  height: "40px",
  margin: 0,
  padding: "0 5px",
});

const InputWithLabel = (props) => {
  const { value, setValue, label, type, placeholder } = props;

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default InputWithLabel;
