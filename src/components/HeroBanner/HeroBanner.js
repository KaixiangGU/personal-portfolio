import { Typography, Box, AppBar, Button, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import React from "react";
import "./Home.css";

const HeroBanner = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Box id="home">
        <Box className="hero-banner" sx={{ overflow: "hidden" }}>
          <div className="overlay">
            <div className="background"></div>
            <Particles
              id="tsparticles"
              canvasClassName="particlesCanvas"
              init={particlesInit}
              loaded={particlesLoaded}
              container
              options={{
                fullScreen: {
                  enable: false,
                },
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 50,
                      duration: 0.25,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#64ffda",
                  },
                  links: {
                    color: "#64ffda",
                    distance: 200,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: 1.5,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 150,
                  },
                  opacity: {
                    value: 0.3,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 1, max: 3 },
                  },
                },
                detectRetina: true,
              }}
            />
          </div>
          <Box sx={{ mt: "30vh", px: 2 }}>
            <Typography
              variant="h1"
              color="white"
              className="header-1"
              sx={{
                ml: "8vw",
                fontFamily: "PT Serif, serif",
                fontSize: "calc(1.5rem + 4vw)",
              }}
            >
              Hi, I'm Kevin Gu,
            </Typography>
            <Typography
              variant="h1"
              color="#ccd6f6"
              fontWeight="bold"
              className="header-2"
              sx={{
                fontFamily: "'Jost', sans-serif;",
                ml: "8vw",
                fontSize: "calc(2.5rem + 3vw)",
              }}
            >
              Software Developer
            </Typography>
          </Box>
          <Box sx={{ ml: "8vw" }} className="header-icon">
            <IconButton disableRipple target="blank" href="https://github.com/KaixiangGU">
              <GitHubIcon sx={{ fontSize: 40, color: "white" }} className="github-icon" />
            </IconButton>
            <IconButton
              disableRipple
              sx={{ mx: 2 }}
              target="blank"
              href="https://www.linkedin.com/in/kevin-gu-profile/"
            >
              <LinkedInIcon sx={{ fontSize: 43, color: "white" }} className="linkedin-icon" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroBanner;
