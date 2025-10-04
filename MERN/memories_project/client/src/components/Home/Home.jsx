import { useState, useEffect } from "react";
import { Grow, Container, Grid } from "@mui/material";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
          className="flex-col-reverse sm:flex-row"
        >
          <Grid size={{ xs: 12, sm: 8 }}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
