// components/home.js
import React from "react";
import { Typography, Box, Container, Divider } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "75vh" }}>
      <Container sx={{ padding: 4, flexGrow: 1 }}>
        <Box
          sx={{
            padding: 4,
            bgcolor: "#ffffff",
            borderRadius: 3,
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Welcome to Your Document Hub 🗂️
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            A centralized, secure platform for managing, storing, and collaborating on important documents.
            <br />
            Upload, organize, review, and access your files — all in one place.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 3, color: "gray" }}>
            Use the sidebar to get started. Login or sign up to unlock full functionality.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
