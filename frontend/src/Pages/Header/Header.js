import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAboutUsClick = () => {
    // Navigate to the "AboutUs" page when "About Us" is clicked
    navigate("/aboutus");
    handleClose(); // Close the menu
  };

  const headerStyle = {
    backgroundColor: "orange",
    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
  };

  return (
    <AppBar position="static" style={headerStyle}>
      <Toolbar>
        <Typography variant="h6" style={{ fontFamily: "'Nabla', sans-serif", fontSize: "2rem" }}>
          YummyGreek
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
          style={{ marginLeft: "auto" }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>My Account</MenuItem>
          <MenuItem onClick={handleClose}>Orders</MenuItem>
          <MenuItem onClick={handleAboutUsClick}>About Us</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
