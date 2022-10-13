import { Button } from "@mui/material";
import React from "react";

function CustomButton({ label, addStyles, disabled, onClick }) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#5865f2",
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: "14px",
        padding: "10px 20px",
        width: "100%",
        height: "40px",
      }}
      style={addStyles ? addStyles : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default CustomButton;
