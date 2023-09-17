import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "orange",
    padding: "10px 0",
    textAlign: "center",
    color: "white",
    position: "fixed",
    bottom: 0,
    left: 0,  
    right: 0, 
    width: "100%", // Make the width 100%
  };

  return (
    <Box component="footer" style={footerStyle}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} YummyGreek. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
