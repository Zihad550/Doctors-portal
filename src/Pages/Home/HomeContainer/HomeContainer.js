import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";

const HomeContainer = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <Services />
      <AppointmentBanner />
      <Doctors />
    </>
  );
};

export default HomeContainer;
