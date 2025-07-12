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
import { useNavigate } from "react-router-dom";
import "../style.css";

const roleLabels = {
  openUser: "Open User",
  educatorUser: "Educator",
  moderatorUser: "Moderator",
  adminUser: "Admin",
};

const menuItems = [
  { text: "Home", section: "/" },
  { text: "Search Resources", section: "/resource-search-page" },
  { text: "Subject View", section: "/subject-view-page" },
  { text: "Resource Report", section: "/resource-report-page" },
  { text: "Rate Resources", section: "/rate-resource-page" },
  { text: "Contribute Resource", section: "/file-upload-page" },
  { text: "Moderate Resources", section: "/moderate-page" },
  { text: "User Management", section: "/update-role-page" },
  { text: "Analytics", section: "/analytics-page" },
  { text: "Contributors", section: "/contributors-page" },
  { text: "About Us", section: "/about-us-page" },
  { text: "FAQ", section: "/faq-page" },
];

const Header = ({ user, onLogout }) => {
  const storedUsername = localStorage.getItem("username");
  const storedUserRole = localStorage.getItem("userRole");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#4caf50" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Document Management Platform
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
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="auth-button"
                  onClick={() => navigate("/register")}
                >
                  Sign Up
                </button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

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
                navigate(section);
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
