import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router";
import memories from "../../assets/memories.png";

const Navbar = () => {
  const user = null;

  return (
    <AppBar
      className="m-[30px] flex w-auto flex-row items-center justify-between rounded-[15px] px-[50px]
        py-[10px]"
      position="static"
      color="inherit"
    >
      <div className="flex items-center">
        <Typography
          component={Link}
          to="/"
          className="text-[rgba(0,183,255,1)]"
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img className="ml-[15px] h-[50px]" src={memories} alt="memories" height="60" />
      </div>
      <Toolbar className="flex w-[400px] justify-end sm:w-auto">
        {user ? (
          <div
            className="flex w-[400px] items-center justify-between sm:mt-[20px] sm:w-auto
              sm:justify-center"
          >
            <Avatar className="" alt={user.result.name} src={user.result.imageUrl}>
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className="flex items-center text-center" variant="h6">
              {user.result.name}
            </Typography>
            <Button variant="contained" className="ml-[20px]" color="secondary">
              Logout
            </Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
