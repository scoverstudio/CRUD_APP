import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (post) => {
    dispatch(addPost(post));
    navigate("/");
  };
  return (
    <Container>
      <PostForm action={handleSubmit} actionText='Add post' />
    </Container>
  );
};

export default AddPostForm;
