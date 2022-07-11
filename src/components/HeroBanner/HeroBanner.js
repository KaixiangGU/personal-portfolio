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
          <div className="overlay">
            <div className="background"></div>
            <Typography
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
            </Typography>
          </div>
          <Box sx={{ mt: "25vh" }}>
            <Typography
              variant="h1"
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
              fontWeight="bold"
              sx={{
                fontFamily: "'Jost', sans-serif;",
                ml: "8vw",
                fontSize: "calc(3rem + 4vw)",
                textShadow: "6px 6px 0px rgb(255,200,0)",
              }}
            >
              a web developer
            </Typography>
          </Box>
          <Box sx={{ ml: "8vw" }}>
            <IconButton disableRipple>
              <GitHubIcon sx={{ fontSize: 40 }} className="github-icon" />
            </IconButton>
            <IconButton disableRipple sx={{ mx: 2 }}>
              <LinkedInIcon sx={{ fontSize: 43 }} className="linkedin-icon" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroBanner;
