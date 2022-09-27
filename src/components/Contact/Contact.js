import React, { useRef, useState } from "react";
import { Box, TextField, Grid, Typography, Link } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";

import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send Message");
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("primary");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm("service_7719mi7", "template_ekkglo9", form.current, "i6wizeY_YDG6h50OY").then(
      (result) => {
        console.log(result.text);
        setButtonText("Success!");
        setColor("success");
        setLoading(false);
      },
      (error) => {
        console.log(error.text);
        setButtonText("Error!");
        setLoading(false);
        setColor("error");
      }
    );
  };

  return (
    <Box id="contact" className="contact-background">
      <Grid
        container
        columnSpacing={3}
        rowSpacing={3}
        sx={{ width: "90%", maxWidth: "1100px", mx: "auto", pb: 20 }}
      >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            color="#ccd6f6"
            data-aos="fade-up"
            data-aos-once
            sx={{
              fontSize: "calc(2rem + 1vw)",
              fontFamily: "'Jost', serif",
              pb: 5,
            }}
          >
            Get In Touch
          </Typography>
        </Grid>
        <Grid item md={7} data-aos="fade-up" data-aos-once>
          <form ref={form} onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              name="from_name"
              variant="filled"
              fullWidth
              required
              sx={{ backgroundColor: "white" }}
            />
            <TextField
              label="Your Email"
              name="from_email"
              variant="filled"
              fullWidth
              required
              sx={{ my: 3, backgroundColor: "white" }}
            />
            <TextField
              label="Enter Your Message"
              name="message"
              multiline
              rows="5"
              variant="filled"
              fullWidth
              required
              sx={{ mb: 3, backgroundColor: "white" }}
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <LoadingButton
                variant="contained"
                loading={loading}
                loadingPosition="end"
                endIcon={<SendIcon />}
                type="submit"
                color={color}
              >
                {buttonText}
              </LoadingButton>
            </Box>
          </form>
        </Grid>
        <Grid
          item
          md={5}
          sx={{ fontFamily: "SFmono, Arial, Helvetica, sans-serif" }}
          data-aos="fade-up"
          data-aos-once
        >
          <Box className="flex">
            <PhoneAndroidIcon style={{ color: "#ccd6f6" }} className="contact-icons" />
            <Typography variant="body1" color="#a8b2d1">
              +1 778-668-6364
            </Typography>
          </Box>
          <Box className="flex">
            <EmailIcon style={{ color: "#ccd6f6" }} className="contact-icons" />
            <Typography variant="body1" color="#a8b2d1">
              kevingu7140@gmail.com
            </Typography>
          </Box>
          <Box className="flex">
            <GitHubIcon style={{ color: "#ccd6f6" }} className="contact-icons" />
            <Link
              href="https://github.com/KaixiangGU"
              target="blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography variant="body1" color="#a8b2d1" className="external-link">
                https://github.com/KaixiangGU
              </Typography>
            </Link>
          </Box>
          <Box className="flex">
            <LinkedInIcon style={{ color: "#ccd6f6" }} className="contact-icons" />
            <Link
              href="https://www.linkedin.com/in/kevin-gu-905a19224/"
              target="blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography variant="body1" color="#a8b2d1" className="external-link">
                https://www.linkedin.com/in/kevin-gu-905a19224/
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        color="#ccd6f6"
        fontFamily="SFmono, Helvetica"
        sx={{ pb: 5, textAlign: "center" }}
      >
        Designed & Built by Kevin Gu
      </Typography>
    </Box>
  );
};

export default Contact;
