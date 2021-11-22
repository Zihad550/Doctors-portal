import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../../images/appointment-bg.png";
import image from "../../../images/doctor.png";

const appointmentBg = {
  background: `url(${bg}) center center rgb(24 23 23 / 94%)`,
  backgroundBlendMode: "darken",
  marginTop: 125,
};

const AppointmentBanner = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={appointmentBg}>
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "100%", marginTop: -150 }}
              src={image}
              alt="appointment"
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ my: "auto", textAlign: "left" }}>
            <Typography
              sx={{ fontWeight: "bold", color: "info.main", mb: 5 }}
              variant="h6"
            >
              APPOINTMENT
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", mb: 3, color: "white" }}
              variant="h3"
              component="h3"
            >
              Make an appointment <br /> Today
            </Typography>
            <Typography
              sx={{ color: "white", mb: 3 }}
              variant="body2"
              color="text.secondary"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: "info.light" }}>
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentBanner;
