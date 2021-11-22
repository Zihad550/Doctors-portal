import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
        <CardMedia
          style={{ height: "94px", width: "auto", margin: "0 auto" }}
          component="img"
          image={img}
          alt="service"
        />
        <CardContent>
          <Typography variant="h5" component="h4">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
