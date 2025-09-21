import { AppBar, Container, Grid, Grow, Typography } from "@mui/material";
import memories from "./assets/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts } from "./actions/posts";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container>
      <AppBar
        className="m-[30px] flex flex-row items-center justify-center rounded-[15px]"
        position="static"
        color="inherit"
      >
        <Typography className="text-[rgba(0,183,255,1)]" variant="h2" align="center">
          Memories
        </Typography>
        <img className="ml-[15px] h-[50px]" src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            spacing={3}
            sx={{
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
            <Grid size={{ xs: 12, sm: 7 }}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
