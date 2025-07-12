// components/home.js
import React from "react";
import { Typography, Box, Container } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "75vh" }}>
      <Container sx={{ padding: 2, flexGrow: 1 }}>
        <Box sx={{ padding: 2, bgcolor: "#ffffff", borderRadius: 2 }}>
          <Typography variant="h5">Welcome to the platform</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
