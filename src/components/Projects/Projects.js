import React from "react";
import { Box, Card, CardMedia, CardActions, Typography, Link, Grid } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./Project.css";

const Projects = () => {
  const projects = [
    {
      title: "MERN Foodie app",
      desc: "It's a recipe sharing app built with MERN stack. This app supports CRUD operations of recipes and also user authentication feature. Users are able to login with either username/password or google login feature. I use MongoDB as database to store and all the data",
      image: "./images/foodie.jpg",
      chips: ["React.js", "express", "Node.js", "MongoDB", "Redux"],
      github: "https://github.com/KaixiangGU/foodie-app",
      site: "https://app-foodie.netlify.app/",
    },
    {
      title: "Algo Simplified",
      desc: "I built Algo Simplified because I'm fascinated about sorting algorithms and I want to visualize sorting process to better understand how different sorting methods work behind the scene.",
      image: "./images/algo-visualizer.jpeg",
      chips: ["React.js", "HTML", "CSS", "Javascript"],
      github: "https://github.com/KaixiangGU/Algorithm-Visualizer",
      site: "https://algosimplified.netlify.app/",
    },
    {
      title: "Techmore",
      desc: "Techmore is a CMS based ecommerce app with shopping cart and Stripe payment functionalities, and I use Sanity to manage and update product details ",
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
      <Box className="projects-content">
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
              {index === 0 ? (
                <iframe
                  width="540"
                  height="360"
                  src="https://www.youtube.com/embed/_UZEMaKGsww"
                  title="Foodie App Video Demo"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
                  allowFullScreen
                />
              ) : (
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
              )}
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
