import { Typography, Box, IconButton } from "@mui/material";
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
                  enable: true,
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
                    value: "#ccd6f6",
                  },
                  // links: {
                  //   color: "#64ffda",
                  //   distance: 200,
                  //   enable: true,
                  //   opacity: 0.3,
                  //   width: 1,
                  // },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    directions: "none",
                    enable: true,
                    outModes: "out",
                    bounce: false,
                    random: true,
                    speed: 1,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0,
                      sync: false,
                    },
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 1, max: 5 },
                  },
                },
                detectRetina: true,
                background: {
                  color: "#0a192f",
                },
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
              Front End Developer
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
