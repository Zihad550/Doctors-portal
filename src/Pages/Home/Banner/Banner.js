import { Button, Container, Grid, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";
import bg from "../../../images/bg.png";
import chairImage from "../../../images/chair.png";

const bannerBg = {
  background: `url(${bg}) center center`,
};

const verticalCenter = {
  display: "flex",
  height: "34rem",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const Banner = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={bannerBg}>
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid
            style={{ ...verticalCenter, textAlign: "left" }}
            item
            xs={12}
            md={5}
          >
            <Box>
              <Typography variant="h4" component="h2">
                Your New Smile <br />
                Starts Here
              </Typography>
              <Typography variant="body2" sx={{ my: 3 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                culpa cumque enim! Voluptatibus aliquid expedita saepe
                accusantium itaque ducimus rem voluptas
              </Typography>
              <Button
                variant="contained"
                style={{
                  background: "linear-gradient(to right, #00c6ff, #0072ff)",
                }}
              >
                GET APPOINTMENT
              </Button>
            </Box>
          </Grid>
          <Grid style={verticalCenter} item xs={12} md={7}>
            <img style={{ width: "30rem" }} src={chairImage} alt="banner" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
