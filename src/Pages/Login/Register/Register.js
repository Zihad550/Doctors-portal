import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginImage from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const { registerUser, isLoading, authError, user } = useAuth();

  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.retype_password) {
      alert("password did not match");
    } else {
      registerUser(
        loginData.email,
        loginData.retype_password,
        loginData.name,
        navigate
      );
    }
  };
  return (
    <Container>
      <Grid
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        container
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid
          sx={{ display: "flex", flexDirection: "column" }}
          item
          xs={12}
          md={6}
        >
          <Typography variant="body1">Register</Typography>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <form onSubmit={handleRegister}>
                <TextField
                  sx={{ width: "75%" }}
                  label="Your Name"
                  onBlur={handleOnBlur}
                  variant="standard"
                  name="name"
                />
                <TextField
                  sx={{ width: "75%" }}
                  label="Your Email"
                  onBlur={handleOnBlur}
                  variant="standard"
                  name="email"
                />
                <br />
                <TextField
                  sx={{ width: "75%" }}
                  onBlur={handleOnBlur}
                  label="Your Password"
                  variant="standard"
                  type="password"
                  name="password"
                />
                <TextField
                  sx={{ width: "75%" }}
                  onBlur={handleOnBlur}
                  label="Retype Your Password"
                  variant="standard"
                  type="password"
                  name="retype_password"
                />
                <br />
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text">
                    Already Registered? Please Login
                  </Button>
                </NavLink>
                <br />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ background: "info.main", mt: 3, width: "75%" }}
                >
                  Register
                </Button>
              </form>
              {user?.email && (
                <Alert sx={{ mt: 3 }} severity="success">
                  {" "}
                  User created successfully
                </Alert>
              )}
              {authError && <Alert severity="error">{authError}</Alert>}
            </>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={loginImage} alt="login" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
