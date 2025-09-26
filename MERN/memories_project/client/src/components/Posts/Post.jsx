import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import moment from "moment";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <Card className="relative flex h-[100%] min-w-[350px] flex-col justify-between rounded-[15px]">
      <CardMedia
        className="h-0 bg-[rgba(0,0,0,0.5)] pt-[56.25%] bg-blend-darken"
        image={post.selectedFile}
        title={post.title}
      />
      <div className="absolute top-[20px] left-[20px] text-white">
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className="absolute top-[20px] right-[20px] text-white">
        <Button
          sx={{ color: "white" }}
          size="small"
          onClick={() => {
            setCurrentId(post._id);
          }}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className="m-[20px] flex justify-between">
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className="px-[16px]" variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between px-[16px] pt-[0px] pb-[8px]">
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; Like &nbsp;
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
