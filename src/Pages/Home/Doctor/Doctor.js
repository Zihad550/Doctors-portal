import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Doctor = ({ doctor }) => {
  const { name, email, image } = doctor;
  return (
    <Grid item sx={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          width="100%"
          image={`data:image/png;base64,${image}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {email}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Doctor;
