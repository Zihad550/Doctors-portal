import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://fierce-chamber-73617.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {doctors.map((doctor) => (
            <Doctor doctor={doctor} key={doctor._id} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Doctors;
