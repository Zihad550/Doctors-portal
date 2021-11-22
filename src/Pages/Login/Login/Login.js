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
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginImage from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const { logIn, user, authError, isLoading, loginWithGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    logIn(loginData.email, loginData.password, location, navigate);
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
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <Typography variant="body1">Login</Typography>
              <form onSubmit={handleLogin}>
                <TextField
                  sx={{ width: "75%" }}
                  label="Your Email"
                  onChange={handleOnChange}
                  variant="standard"
                  name="email"
                />{" "}
                <br />
                <TextField
                  sx={{ width: "75%" }}
                  onChange={handleOnChange}
                  label="Your Password"
                  variant="standard"
                  type="password"
                  name="password"
                />
                <br />
                <NavLink style={{ textDecoration: "none" }} to="/register">
                  <Button variant="text">New User? Please Register</Button>
                </NavLink>
                <br />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ background: "info.main", mt: 3, width: "75%" }}
                >
                  Login
                </Button>
                {user?.email && (
                  <Alert sx={{ mt: 3 }} severity="success">
                    User log in successfully
                  </Alert>
                )}
                {authError && (
                  <Alert sx={{ mt: 3 }} severity="error">
                    {authError}
                  </Alert>
                )}
              </form>
              <p>------------------------------------------</p>
              <Button
                sx={{
                  background: "info.main",
                  mt: 3,
                  width: "75%",
                  mx: "auto",
                }}
                onClick={() => loginWithGoogle(location, navigate)}
                variant="contained"
              >
                Sign In With Google
              </Button>
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

export default Login;
