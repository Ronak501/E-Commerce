import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{ flexGrow: 1, position: "fixed", top: 0, width: "100%", zIndex: 1 }}
    >
      <AppBar position="static" style={{ backgroundColor: "red" }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "auto",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                aria-controls="menu-listbar"
                aria-haspopup="true"
                onClick={handleMenu}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <img
                src="./src/assets/gamthiaahar_logo.png"
                alt="E-commerce"
                style={{ height: "70px", marginRight: "auto" }}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton color="inherit" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ mr: -2 }}
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Menu
            id="menu-listbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Multigrain Atta</MenuItem>
            <MenuItem onClick={handleClose}>Our Story</MenuItem>
            <MenuItem onClick={handleClose}>Recipe</MenuItem>
            <MenuItem onClick={handleClose}>Contect Us</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}