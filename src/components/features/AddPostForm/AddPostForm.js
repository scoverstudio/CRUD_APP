import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/postsRedux";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [shortDescription, setShortDescritpion] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && publishedDate && shortDescription && content) {
      dispatch(
        addPost({ title, author, publishedDate, shortDescription, content })
      );
      navigate("/", { replace: true });
    } else {
      alert("Wypełnij wszystkie pola!");
    }
    setTitle("");
    setAuthor("");
    setPublishedDate("");
    setShortDescritpion("");
    setContent("");
  };

  return (
    <Container>
      <h2 className='mb-4'>Add post!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className='mb-3 col-6'
          controlId='exampleForm.ControlInput1'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          className='mb-3 col-6'
          controlId='exampleForm.ControlInput1'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter author'
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          className='mb-3 col-6'
          controlId='exampleForm.ControlInput1'>
          <Form.Label>Published</Form.Label>
          <Form.Control
            type='date'
            placeholder='Enter date'
            onChange={(e) => setPublishedDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Short description</Form.Label>
          <Form.Control
            as='textarea'
            rows='3'
            placeholder='Leave a comment here'
            onChange={(e) => setShortDescritpion(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Main content</Form.Label>
          <Form.Control
            as='textarea'
            rows='6'
            placeholder='Leave a comment here'
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Button type='submit'>Add post</Button>
      </Form>
    </Container>
  );
};

export default AddPostForm;
