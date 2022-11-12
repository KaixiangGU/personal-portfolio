import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, createTheme, ThemeProvider, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as MuiLink } from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";
import "./Nav.css";
//firebase
import storage from "../../firebase/config";
import { getDownloadURL, ref } from "firebase/storage";
//pdf.js
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const Nav = () => {
  const [resume, setResume] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(!open);

  const renderToolbar = (Toolbar) => (
    <>
      <Toolbar />
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [],
    renderToolbar,
  });

  useEffect(() => {
    getDownloadURL(ref(storage, "Kevin Gu - Front End Developer - Resume.pdf")).then((url) => {
      setResume(url);
    });
  }, []);

  const appbarTheme = createTheme({
    palette: {
      nav: {
        main: "#4fC3DC",
        contrastText: "#fff",
      },
    },
  });

  //change navbar background color on scrolling
  window.onscroll = () => {
    const navContainer = document.querySelector(".nav-container");
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
        <Box sx={{ backgroundColor: "#112240" }}>
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
            to="about"
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
            offset={-60}
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
            underline="none"
            color="white"
            className="nav-link"
            target="blank"
            onClick={handleOpen}
          >
            Resume
          </MuiLink>
          <Modal open={open} onClose={handleClose} sx={{ width: "80%", mx: "auto" }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
              <Viewer fileUrl={resume} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          </Modal>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Nav;
