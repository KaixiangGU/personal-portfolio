import React, { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Link,
  Chip,
  Grid,
} from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import GitHubIcon from "@mui/icons-material/GitHub";
import TabIcon from "@mui/icons-material/Tab";
import "./Project.css";

const Projects = () => {
  const [open, setOpen] = useState(false);

  const projects = [
    {
      title: "MERN Foodie app",
      desc: "It's a MERN stack app that users are allowed to create their favorite recipes. All the recipes will be stored in MongoDB database.",
      image: "./images/foodie.jpg",
      chips: ["React.js", "express", "Node.js", "Material UI", "MongoDB", "Redux", "React Router"],
      github: "https://github.com/KaixiangGU/foodie-app",
      site: "https://app-foodie.netlify.app/",
    },
    {
      title: "Ecommerce shop",
      desc: "This is a CMS based ecommerce app with shopping cart and Stripe payment functions, and for the backend which is hosted by Sanity CMS",
      image: "./images/ecommerce.jpg",
      chips: ["Next.js", "express", "Sanity(CMS)", "React.js", "Stripe"],
      github: "https://github.com/KaixiangGU/Ecommerce-App",
      site: "https://ecommerce-app-kaixianggu.vercel.app/",
    },
    {
      title: "Weather app",
      desc: "It's a beginner project to practice my vanilla javascript and data fetching with external API. This app is hosted by github page",
      image: "./images/weatherapp.png",
      chips: ["HTML5", "CSS", "Javascript", "Weather API"],
      github: "https://github.com/KaixiangGU/practice-project/tree/main/5.weather-app",
      site: "https://kaixianggu.github.io/practice-project/5.weather-app/",
    },
  ];

  return (
    <Box sx={{ position: "relative" }} id="projects">
      <div className="project-background-overlay">
        <div className="project-background"></div>
      </div>
      <Typography variant="h3" sx={{ textAlign: "center", p: 8, fontFamily: "PT Serif, serif" }}>
        Projects
      </Typography>
      {projects.map((project, index) => (
        <Grid container sx={{ maxWidth: "1000px", mx: "auto", p: 5 }} key={index}>
          <Grid item xs={9} lg={5} sx={{ px: 4, mx: "auto", mb: 2 }}>
            <Typography variant="h4">{project.title}</Typography>
            <Typography variant="body1" sx={{ py: 3 }}>
              {project.desc}
            </Typography>
            <Box>
              {project.chips.map((chip, index) => (
                <Chip variant="outlined" label={chip} sx={{ mr: 1, mb: 1 }} key={index} />
              ))}
            </Box>
          </Grid>
          <Grid item xs={9} lg={7} sx={{ mx: "auto" }}>
            <Card raised sx={{ mx: "auto" }}>
              <AspectRatio ratio="16/9">
                <CardMedia
                  height="300"
                  component="img"
                  image={require(`${project.image}`)}
                  alt={project.title}
                />
              </AspectRatio>
            </Card>
            <CardActions sx={{ display: "flex", justifyContent: "center", py: 4 }}>
              <Link href={project.github} target="blank" className="icon-button">
                <Button
                  variant="contained"
                  startIcon={<GitHubIcon />}
                  size="small"
                  className="project-github"
                  disableRipple
                >
                  Github
                </Button>
              </Link>
              <Link href={project.site} target="blank">
                <Button variant="contained" startIcon={<TabIcon />} size="small" disableRipple>
                  view site
                </Button>
              </Link>
            </CardActions>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default Projects;
