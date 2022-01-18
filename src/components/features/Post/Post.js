import styles from "./Post.module.scss";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Post = ({ id, title, author, publishedDate, shortDescription }) => {
  return (
    <Container className={styles.post}>
      <div className={"border border-muted p-3 mb-3"}>
        <h3>{title}</h3>
        <p>
          <span>Author:</span> {author}
        </p>
        <p>
          <span>Published:</span> {author}
        </p>
        <p>
          <span>PublishedDate:</span> {publishedDate}
        </p>
        <p>{shortDescription}</p>
        <NavLink
          className='bg-primary text-decoration-none text-white list-style-none rounded p-2'
          to={"/post/" + id}>
          Read more!
        </NavLink>
      </div>
    </Container>
  );
};

export default Post;
