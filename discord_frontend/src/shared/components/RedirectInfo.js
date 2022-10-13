import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const RedirectText = styled("span")({
  color: "#00aff4",
  cursor: "pointer",
  fontWeight: 500,
});

const RedirectInfo = ({ text, redirectText, addStyles, redirectHandler }) => {
  return (
    <Typography
      variant="subtitle2"
      sx={{
        color: "#72767d",
      }}
      style={addStyles ? addStyles : {}}
    >
      {text}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
