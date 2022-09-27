import React from "react";
import { Box, Card, CardMedia, CardActions, Typography, Link, Grid } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Aos } from "aos";
import "aos/dist/aos.css";
import "./Project.css";

const Projects = () => {
  const projects = [
    {
      title: "MERN Foodie app",
      desc: "It's a recipe sharing app built with MERN stack. Users are allowed to login with Email or Google account. This app also supports basic CRUD operations and all the recipes will be stored in MongoDB database.",
      image: "./images/foodie.jpg",
      chips: ["React.js", "express", "Node.js", "MongoDB", "Redux"],
      github: "https://github.com/KaixiangGU/foodie-app",
      site: "https://app-foodie.netlify.app/",
    },
    {
      title: "Ecommerce shop",
      desc: "This is a CMS based ecommerce app with shopping cart and Stripe payment functions, and for the backend which is hosted by Sanity CMS.",
      image: "./images/ecommerce.jpg",
      chips: ["Next.js", "express", "Sanity(CMS)", "React.js", "Stripe"],
      github: "https://github.com/KaixiangGU/Ecommerce-App",
      site: "https://ecommerce-app-kaixianggu.vercel.app/",
    },
    {
      title: "Apple Website Clone",
      desc: "This is a fully responsive clone website of Apple Canada Page and it built with pure HTML and CSS. I used this project to practice my UI skills and try to rebuild exact the same look as original website.",
      image: "./images/apple-clone.png",
      chips: ["HTML5", "CSS3", "Javascript"],
      github: "https://github.com/KaixiangGU/apple-clone",
      site: "https://kaixianggu.github.io/apple-clone/",
    },
    {
      title: "Weather app",
      desc: "It's a beginner project to practice my vanilla javascript and data fetching with external API. This app is hosted by github page.",
      image: "./images/weatherapp.png",
      chips: ["HTML5", "CSS", "Javascript", "Weather API"],
      github: "https://github.com/KaixiangGU/practice-project/tree/main/5.weather-app",
      site: "https://kaixianggu.github.io/practice-project/5.weather-app/",
    },
  ];

  return (
    <Box id="projects">
      <Typography
        variant="h3"
        color="#ccd6f6"
        data-aos="fade-up"
        data-aos-once
        sx={{
          fontSize: "calc(2rem + 1vw)",
          textAlign: "center",
          pb: 10,
          fontFamily: "'Jost', serif",
        }}
      >
        My Projects
      </Typography>
      {projects.map((project, index) => (
        <Grid
          container
          sx={{ maxWidth: "1000px", mx: "auto", pb: 20 }}
          key={index}
          className="project-wrapper"
          data-aos="fade-up"
          data-aos-once
        >
          <Grid item xs={10} md={5} sx={{ mx: "auto", mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography
                variant="h4"
                color="#ccd6f6"
                className="project-title"
                sx={{
                  fontFamily: "'Jost', serif",
                  fontSize: "calc(1.2rem + .5vw)",
                }}
              >
                0{index + 1}. {project.title}
              </Typography>
              <Box sx={{ backgroundColor: "#112240", p: 2, my: 2 }}>
                <Typography variant="body1" color="#a8b2d1" sx={{ fontSize: "14px" }}>
                  {project.desc}
                </Typography>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-start", pt: 2, flexWrap: "wrap" }}
                >
                  {project.chips.map((chip, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      color="#ccd6f6"
                      fontFamily="SFmono"
                      fontSize="14px"
                      sx={{ mr: 2 }}
                    >
                      {chip}
                    </Typography>
                  ))}
                </Box>
              </Box>
              <CardActions sx={{ display: "flex" }}>
                <Link href={project.github} target="blank" sx={{ mr: 2 }}>
                  <GitHubIcon
                    sx={{ color: "#ccd6f6", "&:hover": { color: "#64ffda" } }}
                    className="project-icon"
                  />
                </Link>
                <Link href={project.site} target="blank">
                  <OpenInNewIcon
                    sx={{ color: "#ccd6f6", "&:hover": { color: "#64ffda" } }}
                    className="project-icon"
                  />
                </Link>
              </CardActions>
            </Box>
          </Grid>
          <Grid item xs={8} md={6} sx={{ mx: "auto" }} className="project-image">
            <Card raised sx={{ mx: "auto" }}>
              <Link href={project.site} target="blank">
                <AspectRatio ratio="16/9">
                  <CardMedia
                    height="300"
                    component="img"
                    image={require(`${project.image}`)}
                    alt={project.title}
                  />
                </AspectRatio>
              </Link>
            </Card>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default Projects;
