import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import chairImage from "../../../images/chair.png";
import Calender from "../../Shared/Calender/Calender";

const AppointmentHeader = ({ date, setDate }) => {
  return (
    <Container>
      <Grid container spacing={{ sx: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", my: 5, textAlign: "left" }}
          >
            Appointment{" "}
          </Typography>
          <Calender date={date} setDate={setDate} />
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={chairImage} alt="chair" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentHeader;
