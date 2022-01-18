import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPosts } from "../../../redux/postsRedux";
import Post from "../Post/Post";

const SinglePost = () => {
  return (
    <Container>
      <Post />
    </Container>
  );
};

export default SinglePost;
