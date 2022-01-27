import styles from "./PostCard.module.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostsById } from "../../../redux/postsRedux";
import { dateToStr } from "../../../utils/dateToStr";
import { getCategoriesById } from "../../../redux/categoriesRedux";

const PostCard = ({ id, title, author, publishedDate, category }) => {
  const postData = useSelector((state) => getPostsById(state, id));
  
  return (
    <Container className={styles.post}>
      <div className={"border border-muted p-3 mb-3"}>
        <h3>{title}</h3>
        <p>
          <span>Author:</span> {author}
        </p>
        <p>
          <span>PublishedDate:</span> {dateToStr(publishedDate)}
        </p>
        <p>
          <span>Category:</span> {category}
        </p>
        <p dangerouslySetInnerHTML={{ __html: postData.shortDescription }} />
        <Link
          className="bg-primary text-decoration-none text-white list-style-none rounded p-2"
          key={id}
          to={"/post/" + id}
        >
          Read more!
        </Link>
      </div>
    </Container>
  );
};

export default PostCard;
