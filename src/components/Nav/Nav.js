import React from "react";
import { AppBar, Toolbar, createTheme, ThemeProvider, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as MuiLink } from "@mui/material";
import { Link } from "react-scroll";
import "./Nav.css";

const Nav = () => {
  const appbarTheme = createTheme({
    palette: {
      nav: {
        main: "#4fC3DC",
        contrastText: "#fff",
      },
    },
  });

  //change navbar background color on scrolling
  const navContainer = document.querySelector(".nav-container");
  window.onscroll = () => {
    if (window.scrollY > 150) {
      navContainer.classList.add("scroll");
    } else {
      navContainer.classList.remove("scroll");
    }
  };

  const toggleMenu = () => {
    const nav = document.querySelector(".MuiToolbar-root");
    nav.classList.toggle("show");
  };

  return (
    <ThemeProvider theme={appbarTheme}>
      <AppBar position="fixed" color="transparent" sx={{ boxShadow: "0" }}>
        <Box sx={{ backgroundColor: "#4fc3dc" }}>
          <IconButton
            disableRipple
            className="menu-button"
            sx={{ display: { xs: "block", sm: "none" }, ml: "auto" }}
            onClick={toggleMenu}
          >
            <MenuIcon sx={{ fontSize: 30, color: "white" }} />
          </IconButton>
        </Box>
        <Toolbar
          className="nav-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            columnGap: 5,
            fontSize: "1.5rem",
          }}
        >
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="nav-link"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="tech"
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}
            className="nav-link"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="nav-link"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="nav-link"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <MuiLink
            href="https://docs.google.com/document/d/1U2tVyJQZXSKzt-BRbxGiRlbEnyEb3LM1wIel6YoKkoI/edit?usp=sharing"
            underline="none"
            color="white"
            className="nav-link"
            target="blank"
            onClick={toggleMenu}
          >
            Resume
          </MuiLink>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Nav;
