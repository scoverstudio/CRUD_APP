import styles from "./PostCard.module.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostCard = ({ id, title, author, publishedDate, shortDescription }) => {
  return (
    <Container className={styles.post}>
      <div className={"border border-muted p-3 mb-3"}>
        <h3>{title}</h3>
        <p>
          <span>Author:</span> {author}
        </p>
        <p>
          <span>PublishedDate:</span> {publishedDate}
        </p>
        <p>{shortDescription}</p>
        <Link
          className='bg-primary text-decoration-none text-white list-style-none rounded p-2'
          key={id}
          to={"/post/" + id}>
          Read more!
        </Link>
      </div>
    </Container>
  );
};

export default PostCard;
