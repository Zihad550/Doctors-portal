import { Grid } from "@mui/material";
import React, { useState } from "react";
import Calender from "../../Shared/Calender/Calender";
import Appoinments from "../Appoinments/Appoinments";

const DashboardHome = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      <Grid item xs={12} md={4}>
        <Calender date={date} setDate={setDate} />{" "}
      </Grid>
      <Grid item xs={12} md={8}>
        <Appoinments date={date} />
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
