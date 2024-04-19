import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      <ListItemButton
        component={Link}
        to="/"
        onClick={isMobile ? handleDrawerToggle : null}
      >
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/todos"
        onClick={isMobile ? handleDrawerToggle : null}
      >
        <ListItemText primary="TODO List" />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/info"
        onClick={isMobile ? handleDrawerToggle : null}
      >
        <ListItemText primary="Info Page" />
      </ListItemButton>
    </List>
  );

  return (
    <nav>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: isMobile ? "block" : "none" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};
