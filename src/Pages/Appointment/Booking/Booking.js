import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookedSuccess }) => {
  const { name, time, space, price } = booking;
  const [openBooking, setOpenBooking] = useState(false);
  const handleOpenBooking = () => setOpenBooking(true);
  const handleCloseBooking = () => setOpenBooking(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ py: 3 }} elevation={3}>
          <Typography
            color="info.main"
            sx={{ fontWeight: "bold" }}
            gutterBottom
            variant="h5"
          >
            {name}
          </Typography>
          <Typography gutterBottom variant="h6">
            {time}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            display="block"
            gutterBottom
          >
            Price: ${price}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            display="block"
            gutterBottom
          >
            {space} SPACES AVAILABLE
          </Typography>
          <Button
            onClick={handleOpenBooking}
            variant="contained"
            sx={{ backgroundColor: "main.info" }}
          >
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        setBookedSuccess={setBookedSuccess}
        date={date}
        booking={booking}
        handleCloseBooking={handleCloseBooking}
        openBooking={openBooking}
      />
    </>
  );
};

export default Booking;
