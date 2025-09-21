import { useSelector } from "react-redux";
import Post from "./Post";
import { CircularProgress, Grid } from "@mui/material";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className="flex items-center" container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} spacing={{ xs: 12, sm: 6 }}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
