import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import "./Tech.css";

const Tech = () => {
  const about =
    "I'm a self-taught web developer currently based in British Columbia, CA. I have strong adaptability and self-study ability and always eager to learn new skills. Currently looking for full time opportunities.";

  return (
    <Box
      sx={{
        mx: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        py: 4,
        position: "relative",
      }}
      id="tech"
    >
      <div className="tech-background-overlay">
        <div className="tech-background"></div>
        <div className="gradient"></div>
      </div>
      <Box sx={{ width: "80%", maxWidth: "700px" }}>
        <Typography
          variant="h3"
          color="white"
          sx={{
            fontSize: "calc(2rem + 1vw)",
            fontFamily: "PT Serif, serif",
            textAlign: "center",
            p: 2,
          }}
        >
          About me
        </Typography>
        <Typography variant="body1" color="white" sx={{ fontSize: "1.2rem" }}>
          {about}
        </Typography>
      </Box>
      <Grid cotainer sx={{ width: "80%", maxWidth: "1000px", mx: "auto" }}>
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
