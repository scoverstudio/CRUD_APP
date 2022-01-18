import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPosts } from "../../../redux/postsRedux";
import Post from "../Post/Post";

const Posts = () => {
  const { id } = useParams();
  const posts = useSelector((state) => getAllPosts(state, id));
  return (
    <Row xs={1} md={2} lg={3} className='g-3 posts d-flex flex-row justify-content-start'>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            publishedDate={post.publishedDate}
            shortDescription={post.shortDescription}
          />
        ))}
    </Row>
  );
};

export default Posts;
