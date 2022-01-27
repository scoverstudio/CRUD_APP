import { Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../../redux/categoriesRedux";

const Categories = () => {
  const categories = useSelector((state) => getAllCategories(state));

  return (
    <Container>
      <Col className="text-center p-5">
        {categories.map((category) => (
          <Link key={category.id} to={"/category/" + category.value}>
            <h3>{category.value}</h3>
          </Link>
        ))}
      </Col>
    </Container>
  );
};

export default Categories;
