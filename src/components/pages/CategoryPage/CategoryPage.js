import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getPostsByCategory } from "../../../redux/postsRedux";
import PostCard from "../../features/PostCard/PostCard";

const CategoryPage = () => {
  const { category } = useParams();
  const postsByCategory = useSelector((state) =>
    getPostsByCategory(state, category)
  );

  if (postsByCategory.length === 0) return <Navigate to="/" />;
  return (
    <Container>
      <h2 className="mb-5">Category: {category}</h2>
      <Row
        xs={1}
        md={2}
        lg={3}
        className="g-3 posts d-flex flex-row justify-content-start"
      >
        {postsByCategory.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </Row>
    </Container>
  );
};

export default CategoryPage;
