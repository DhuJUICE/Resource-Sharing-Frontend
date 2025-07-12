// sectionComponents/footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
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
        &copy; {new Date().getFullYear()} JugamSoft. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
