import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPost, getAllPosts } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";

const EditPostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector(getAllPosts);
  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate("/");
  };
  return (
    <Container>
      {posts.map((post) =>
        post.id === id ? (
          <PostForm
            key={post.id}
            action={handleSubmit}
            title={post.title}
            author={post.author}
            publishedDate={post.publishedDate}
            shortDescription={post.shortDescription}
            content={post.content}
            actionText={"Edit post"}
          />
        ) : null
      )}
    </Container>
  );
};

export default EditPostForm;
