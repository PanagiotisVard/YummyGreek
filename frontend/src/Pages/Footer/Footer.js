import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Footer.css"; 

const Footer = () => {
  return (
    <Box component="footer" className="footer-container">
      <Typography variant="body2" className="footer-text">
        &copy; {new Date().getFullYear()} YummyGreek. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
