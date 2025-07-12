// src/components/Header.js

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../style.css";

const roleLabels = {
  openUser: "Open User",
  educatorUser: "Educator",
  moderatorUser: "Moderator",
  adminUser: "Admin",
};

const menuItems = [
  { text: "Home", section: "/" },
  { text: "Search Resources", section: "resource-search" },
  { text: "Subject View", section: "subject-view" },
  { text: "Resource Report", section: "resource-report" },
  { text: "Rate Resources", section: "rate-resource" },
  { text: "Contribute Resource", section: "file-upload" },
  { text: "Moderate Resources", section: "moderate" },
  { text: "User Management", section: "update-user-role" },
  { text: "Analytics", section: "analytics" },
  { text: "Other Educational Resources", section: "oer" },
  { text: "Self Directed Learning", section: "sdl" },
  { text: "Contributors", section: "contributors" },
  { text: "About Us", section: "about-us" },
  { text: "FAQ", section: "faq" },
];

const Header = ({ user, onLogout, onSectionChange }) => {
  const storedUsername = localStorage.getItem("username");
  const storedUserRole = localStorage.getItem("userRole");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#4caf50" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Share2Teach
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {user ? (
              <>
                <Typography sx={{ marginRight: 2 }}>
                  User: {storedUsername}
                  <br />
                  Role: {roleLabels[storedUserRole] || storedUserRole}
                </Typography>
                <button className="auth-button" onClick={onLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="auth-button"
                  onClick={() => onSectionChange("login")}
                >
                  Login
                </button>
                <button
                  className="auth-button"
                  onClick={() => onSectionChange("register")}
                >
                  Sign Up
                </button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={sidebarOpen}
        onClose={toggleSidebar}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            bgcolor: "#2c7b2f",
            color: "white",
          },
        }}
      >
        <IconButton onClick={toggleSidebar} sx={{ marginLeft: "auto" }}>
          <CloseIcon style={{ color: "white" }} />
        </IconButton>
        <List>
          {menuItems.map(({ text, section }) => (
            <ListItem
              button
              key={text}
              onClick={() => {
                onSectionChange(section);
                toggleSidebar();
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
