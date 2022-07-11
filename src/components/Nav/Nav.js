import React from "react";
import { AppBar, Toolbar, useScrollTrigger, createTheme, ThemeProvider } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { Link } from "react-scroll";
import "./Nav.css";

const Nav = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
  });
  const theme = createTheme({
    palette: {
      nav: {
        main: "rgb(255,200,0)",
        contrastText: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color={trigger ? "nav" : "transparent"} sx={{ boxShadow: "0" }}>
        <Toolbar
          sx={{
            justifyContent: "center",
            alignItems: "center",
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
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="tech"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="nav-link"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="nav-link"
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
          >
            Contact
          </Link>
          <MuiLink
            href="https://docs.google.com/document/d/1U2tVyJQZXSKzt-BRbxGiRlbEnyEb3LM1wIel6YoKkoI/edit?usp=sharing"
            underline="none"
            color={trigger ? "white" : "black"}
            className="nav-link"
            target="blank"
          >
            Resume
          </MuiLink>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Nav;
