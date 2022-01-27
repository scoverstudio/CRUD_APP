import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  getAllCategories,
  getCategoriesById,
} from "../../../redux/categoriesRedux";

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || "");
  const [author, setAuthor] = useState(props.author || "");
  const [publishedDate, setPublishedDate] = useState(
    props.publishedDate || new Date()
  );
  const [shortDescription, setShortDescritpion] = useState(
    props.shortDescription || ""
  );

  const categoryById = useSelector((state) =>
    getCategoriesById(state, props.categoryId)
  );
  const categories = useSelector((state) => getAllCategories(state));
  const [category, setCategory] = useState(categoryById || "");

  const [content, setContent] = useState(props.content || "");
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const clearState = () => {
    setTitle("");
    setAuthor("");
    setPublishedDate("");
    setShortDescritpion("");
    setContent("");
  };

  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      action({
        title,
        author,
        publishedDate,
        shortDescription,
        content,
        category,
      });
      navigate("/", { replace: true });
      clearState();
    }
  };

  return (
    <Container>
      <h2 className="mb-4">{actionText}!</h2>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("title", {
              required: {
                value: true,
                message: "Title field is required",
              },
              minLength: {
                value: 3,
                message: "min. 3 characters",
              },
            })}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter title"
          />
          {errors.title && (
            <span className="d-block form-text text-danger mt-2">
              {errors.title.message}
            </span>
          )}
        </Form.Group>

        <Form.Group
          className="mb-3 col-6"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Author</Form.Label>
          <Form.Control
            {...register("author", {
              required: {
                value: true,
                message: "Author field is required",
              },
              minLength: {
                value: 3,
                message: "min. 3 characters",
              },
            })}
            type="text"
            placeholder="Enter author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && (
            <small className="d-block form-text text-danger mt-2">
              {errors.author.message}
            </small>
          )}
        </Form.Group>
        <Form.Group
          className="mb-3 col-6"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Published</Form.Label>
          <DatePicker
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)}
          />
          {dateError && (
            <small className="d-block form-text text-danger mt-2">
              Date can't be empty
            </small>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category:</Form.Label>
          <Form.Control
            as="select"
            {...register("Category", {
              required: {
                value: true,
                message: "Category field is required",
              },
            })}
            type="text"
            value={category.value}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.id} value={`${category.value}`}>
                {category.value}
              </option>
            ))}
          </Form.Control>
          {errors.title && (
            <span className="d-block form-text text-danger mt-2">
              {errors.title.message}
            </span>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Short description</Form.Label>
          <Form.Control
            {...register("shortDescription", {
              required: {
                value: true,
                message: "Title field is required",
              },
              minLength: {
                value: 20,
                message: "Text should be between 20 and 100 characters.",
              },
            })}
            name="shortDescription"
            theme="snow"
            value={shortDescription}
            placeholder="Leave a comment here"
            onChange={(e) => setShortDescritpion(e.target.value)}
          />
          {errors.shortDescription && (
            <small className="d-block form-text text-danger mt-2">
              {errors.shortDescription.message}
            </small>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Main content</Form.Label>
          <ReactQuill
            as="textarea"
            rows="6"
            placeholder="Leave a comment here"
            value={content}
            onChange={setContent}
          />
          {contentError && (
            <small className="d-block form-text text-danger mt-2">
              Content can't be empty
            </small>
          )}
        </Form.Group>
        <Button type="submit">{actionText}</Button>
      </Form>
    </Container>
  );
};

export default PostForm;
