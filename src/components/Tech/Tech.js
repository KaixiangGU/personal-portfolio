import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import "./Tech.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Tech = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const about =
    "I'm a Front-end web developer currently based in Vancouver, B.C. I'm a creative and passionate developer who loves creating high-quality, elegant webpages and always have curiosity and eagerness to learn any new skills that may better fit my job. I'm currently looking for full time opportunities. The following are the skills that I've been working with my projects and have hands-on experience.";

  return (
    <Box
      sx={{
        mx: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        py: 25,
        position: "relative",
      }}
      className="tech-wrapper"
      id="about"
    >
      <div className="tech-background-overlay"></div>
      <Box sx={{ width: "80%", maxWidth: "700px" }}>
        <Typography
          variant="h3"
          color="#ccd6f6"
          data-aos="fade-up"
          data-aos-once
          sx={{
            fontSize: "calc(2rem + 1vw)",
            fontFamily: "'Jost', serif",
            textAlign: "center",
            pb: 5,
          }}
        >
          About me
        </Typography>
        <Typography
          variant="body1"
          color="#a8b2d1"
          data-aos="fade-up"
          data-aos-once
          sx={{ fontFamily: "SFmono", letterSpacing: 0.2, fontSize: "1rem" }}
        >
          {about}
        </Typography>
      </Box>
      <Grid
        cotainer
        data-aos="fade-up"
        data-aos-once
        sx={{ width: "80%", maxWidth: "1000px", mx: "auto", my: 4 }}
      >
        <Grid
          item
          md={12}
          sx={{
            py: 3,
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <i class="devicon-html5-plain-wordmark colored dev-icons"></i>
          <i class="devicon-css3-plain-wordmark colored dev-icons"></i>
          <i class="devicon-javascript-plain colored dev-icons"></i>
          <i class="devicon-react-original-wordmark colored dev-icons"></i>
        </Grid>
        <Grid item md={12} sx={{ py: 3, display: "flex", justifyContent: "space-evenly" }}>
          <i class="devicon-nodejs-plain-wordmark colored dev-icons"></i>
          <i class="devicon-express-original  icons dev-icons icon-express"></i>
          <i class="devicon-materialui-plain colored dev-icons"></i>
          <i class="devicon-mongodb-plain-wordmark colored dev-icons"></i>
        </Grid>
      </Grid>
      <Box sx={{ py: 3 }}>
        <i class="devicon-git-plain colored dev-icons"></i>
      </Box>
    </Box>
  );
};

export default Tech;
