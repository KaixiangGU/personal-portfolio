import { Typography, Box, AppBar, Button, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import "./Home.css";

const HeroBanner = () => {
  return (
    <>
      <Box id="home">
        <Box className="hero-banner" sx={{ overflow: "hidden" }}>
          <div class="area"></div>
          <div className="overlay">
            <div className="background"></div>
            {/* <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: "calc(3.5rem + 7vw)",
                letterSpacing: "1.2rem",
                fontFamily: "'DM Serif Display', serif",
              }}
              className="hero-banner-text"
            >
              HAPPY
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: "calc(3.5rem + 7vw)",
                letterSpacing: "1.2rem",
                fontFamily: "'DM Serif Display', serif",
              }}
              className="hero-banner-text-2"
            >
              CODING
            </Typography> */}
            <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <Box sx={{ mt: "30vh", px: 2 }}>
            <Typography
              variant="h1"
              color="white"
              sx={{
                ml: "8vw",
                fontFamily: "PT Serif, serif",
                fontSize: "calc(2rem + 4vw)",
              }}
            >
              Hi, I'm Kevin Gu,
            </Typography>
            <Typography
              variant="h1"
              color="white"
              fontWeight="bold"
              sx={{
                fontFamily: "'Jost', sans-serif;",
                ml: "8vw",
                fontSize: "calc(3rem + 4vw)",
                textShadow: "6px 6px 0px #2ab6d5                ",
              }}
            >
              a web developer
            </Typography>
          </Box>
          <Box sx={{ ml: "8vw" }}>
            <IconButton disableRipple>
              <GitHubIcon sx={{ fontSize: 40, color: "white" }} className="github-icon" />
            </IconButton>
            <IconButton disableRipple sx={{ mx: 2 }}>
              <LinkedInIcon sx={{ fontSize: 43, color: "white" }} className="linkedin-icon" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroBanner;
