import { Button, ButtonGroup, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBooking,
  handleCloseBooking,
  booking,
  date,
  setBookedSuccess,
}) => {
  const { name, time, price } = booking;
  const { user } = useAuth();

  const [bookingInfo, setBookingInfo] = useState({
    patientName: user.displayName,
    email: user.email,
    phone: "",
  });

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    // collect data
    const appointment = {
      ...bookingInfo,
      time,
      price,
      serviceName: name,
      date: date.toLocaleDateString(),
    };

    // send to the server
    fetch("https://fierce-chamber-73617.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookedSuccess(true);
          handleCloseBooking();
        }
      });
  };
  return (
    <Modal
      open={openBooking}
      onClose={handleCloseBooking}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {name}
        </Typography>
        <form onSubmit={handleBooking}>
          <TextField
            disabled
            defaultValue={time}
            size="small"
            sx={{ width: "100%", m: 1 }}
          />
          <TextField
            name="patientName"
            onBlur={handleOnBlur}
            defaultValue={user.displayName}
            size="small"
            sx={{ width: "100%", m: 1 }}
          />
          <TextField
            placeholder="Phone Number"
            type="number"
            onBlur={handleOnBlur}
            size="small"
            name="phone"
            sx={{ width: "100%", m: 1 }}
          />
          <TextField
            defaultValue={user.email}
            type="email"
            size="small"
            onBlur={handleOnBlur}
            name="email"
            sx={{ width: "100%", m: 1 }}
          />
          <TextField
            disabled
            defaultValue={date.toDateString()}
            size="small"
            sx={{ width: "100%", m: 1 }}
          />
          <ButtonGroup
            type="submit"
            variant="contained"
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              boxShadow: 0,
            }}
          >
            <Button
              sx={{ backgroundColor: "error.main" }}
              onClick={handleCloseBooking}
            >
              Close modal
            </Button>
            <Button type="submit">Send</Button>
          </ButtonGroup>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
