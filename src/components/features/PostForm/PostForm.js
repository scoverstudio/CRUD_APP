import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || "");
  const [author, setAuthor] = useState(props.author || "");
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || "");
  const [shortDescription, setShortDescritpion] = useState(
    props.shortDescription || ""
  );
  const [content, setContent] = useState(props.content || "");

  const navigate = useNavigate();
  console.log(props.title);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && publishedDate && shortDescription && content) {
      action({ title, author, publishedDate, shortDescription, content });
      navigate("/", { replace: true });
    } else {
      alert("uzupelnij");
    }
  };

  return (
    <Container>
      <h2 className='mb-4'>{actionText}!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className='mb-3 col-6'
          controlId='exampleForm.ControlInput1'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter title'
            value={title}
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
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          className='mb-3 col-6'
          controlId='exampleForm.ControlInput1'>
          <Form.Label>Published</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter date'
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Short description</Form.Label>
          <Form.Control
            as='textarea'
            rows='3'
            placeholder='Leave a comment here'
            value={shortDescription}
            onChange={(e) => setShortDescritpion(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Main content</Form.Label>
          <Form.Control
            as='textarea'
            rows='6'
            placeholder='Leave a comment here'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Button type='submit'>{actionText}</Button>
      </Form>
    </Container>
  );
};

export default PostForm;
