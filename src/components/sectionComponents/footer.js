// sectionComponents/footer.js
import React from "react";
import { Box, Typography } from "@mui/material";
import "../style.css"; // For .footer-link

const Footer = ({ onNavigate }) => {
  return (
    <Box
      sx={{
        bgcolor: "#2c7b2f",
        color: "white",
        padding: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        <button
          className="footer-link"
          onClick={() => onNavigate("about-us")}
        >
          About Us
        </button>
        {" | "}
        <button
          className="footer-link"
          onClick={() => onNavigate("faq")}
        >
          FAQ
        </button>
      </Typography>
      <Typography variant="body2" sx={{ marginTop: 1 }}>
        &copy; {new Date().getFullYear()} NexTech. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
