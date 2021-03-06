import { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { getPostsById, removePost } from "../../../redux/postsRedux";
import { dateToStr } from "../../../utils/dateToStr";
import "./Post.module.scss";

const Post = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const postData = useSelector((state) => getPostsById(state, id));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    dispatch(removePost(id));
  };

  if (!postData) return <Navigate to="/" />;
  return (
    <Container className="col-8">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This operation will completely remove this post from the app. Are you
          sure you want to do that?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        className={
          "border border-muted p-3 mb-3 d-flex justify-content-between"
        }
      >
        <div className="post">
          <h3>{postData.title}</h3>
          <p>
            <span>Author: </span> {postData.author}
          </p>
          <p>
            <span>PublishedDate: </span> {dateToStr(postData.publishedDate)}
          </p>
          <p>
            <span>Category: </span> {postData.category}
          </p>
          <p dangerouslySetInnerHTML={{ __html: postData.shortDescription }} />

          <p dangerouslySetInnerHTML={{ __html: postData.content }} />
        </div>
        <div className="post-navigation">
          <Link to={"/post/edit/" + postData.id}>
            <Button variant="outline-info" className="m-1">
              Edit
            </Button>
          </Link>
          <Button onClick={handleShow} variant="outline-danger" className="m-1">
            Delete
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Post;
