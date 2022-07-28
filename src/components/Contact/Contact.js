import React, { useRef, useState, useEffect } from "react";
import { Box, TextField, Grid, Typography, Button, Link } from "@mui/material";
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
        rowSpacing={4}
        sx={{ width: "80%", maxWidth: "1100px", mx: "auto", p: 4 }}
      >
        <Grid item md={12} sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontFamily: "PT Serif, serif" }}>
            Contact me
          </Typography>
        </Grid>
        <Grid item md={7}>
          <form ref={form} onSubmit={handleSubmit}>
            <TextField label="Your Name" name="from_name" variant="filled" fullWidth required />
            <TextField
              label="Your Email"
              name="from_email"
              variant="filled"
              fullWidth
              required
              sx={{ my: 3 }}
            />
            <TextField
              label="Enter Your Message"
              name="message"
              multiline
              rows="5"
              variant="filled"
              fullWidth
              required
              sx={{ mb: 3 }}
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
        <Grid item md={5}>
          <Box className="flex">
            <PhoneAndroidIcon className="contact-icons" />
            <Typography variant="body1">+1 778-668-6364</Typography>
          </Box>
          <Box className="flex">
            <EmailIcon className="contact-icons" />
            <Typography variant="body1">kevingu7140@gmail.com</Typography>
          </Box>
          <Box className="flex">
            <GitHubIcon className="contact-icons" />
            <Link
              href="https://github.com/KaixiangGU"
              target="blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography variant="body1">https://github.com/KaixiangGU</Typography>
            </Link>
          </Box>
          <Box className="flex">
            <LinkedInIcon className="contact-icons" />
            <Link
              href="https://www.linkedin.com/in/kevin-gu-905a19224/"
              target="blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography variant="body1">
                https://www.linkedin.com/in/kevin-gu-905a19224/
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
