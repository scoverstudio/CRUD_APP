import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPost, getPostsById } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";

const EditPostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector((state) => getPostsById(state, id));

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate("/");
  };
  return (
    <Container>
      <PostForm
        key={post.id}
        action={handleSubmit}
        title={post.title}
        author={post.author}
        publishedDate={post.publishedDate}
        shortDescription={post.shortDescription}
        content={post.content}
        category={post.category}
        categoryId={post.categoryId}
        actionText="Edit post"
      />
    </Container>
  );
};

export default EditPostForm;
