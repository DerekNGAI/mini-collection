import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";

import Input from "./Input";
import Icon from "./icon";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const swithchMode = () => {
    setIsSignUp((prev) => !prev);
    handleShowPassword(false);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const token = tokenResponse.access_token;
      const result = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data);

      try {
        dispatch({ type: "AUTH", data: { result, token } });

        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  // const googleSuccess = (res) => {
  //   console.log(res);
  // };

  // const googleFailure = () => {
  //   console.log("Google Sign In was unsuccessful. Try Again Later");
  // };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className="mt-8 flex flex-col items-center p-2" elevation={3}>
        <Avatar className="m-1 bg-pink-500">
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className="mt-3 w-[100%]" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input
              name="email"
              label={"Email Address"}
              handleChange={handleChange}
              type={"email"}
            />
            <Input
              name={"password"}
              label={"Password"}
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handlShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label={"Repeat Password"}
                handleChange={handleChange}
                type={"password"}
              />
            )}
          </Grid>
          {/* <GoogleLogin
            clientId="26612189756-30tj4brss75718vu6cbhtcih9pignbnp.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className="googleButton"
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          /> */}
          <Button className="mt-3 mb-2" type="submit" fullWidth variant="contained" color="primary">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <button onClick={() => googleLogin()}>Sign in with Google</button>
          <Grid container justifyContent={"flex-end"}>
            <Grid>
              <Button onClick={swithchMode}>
                {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
