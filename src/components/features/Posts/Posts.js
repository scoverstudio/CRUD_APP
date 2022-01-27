import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import PostCard from "../PostCard/PostCard";

const Posts = () => {
  const posts = useSelector((state) => getAllPosts(state));

  return (
    <Row
      xs={1}
      md={2}
      lg={3}
      className="g-3 posts d-flex flex-row justify-content-start"
    >
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          publishedDate={post.publishedDate}
          shortDescription={post.shortDescription}
          category={post.category}
          categoryId={post.categoryId}
        />
      ))}
    </Row>
  );
};

export default Posts;
