import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Posts from "../../features/Posts/Posts";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <Container className='homepage'>
      <div className={styles.title}>
        <h1>All posts</h1>
        <Button>
          <NavLink
            className='bg-primary text-decoration-none text-white rounded'
            to={"/post/add"}>
            Add post
          </NavLink>
        </Button>
      </div>
      <div className='posts'>
        <Posts />
      </div>
    </Container>
  );
};

export default HomePage;
