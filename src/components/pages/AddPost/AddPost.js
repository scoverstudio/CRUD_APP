import { Container } from "react-bootstrap";
import AddPostForm from "../../features/AddPostForm/AddPostForm";

const AddPost = () => {
  return (
    <Container className='col-8'>
      <AddPostForm />
    </Container>
  );
};

export default AddPost;
