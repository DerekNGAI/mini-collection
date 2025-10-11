import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import Input from "./Input";
import { useState } from "react";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);

  const isSignUp = true;

  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

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
          <Button className="mt-3 mb-2" type="submit" fullWidth variant="contained" color="primary">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
