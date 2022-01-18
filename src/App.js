import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About/About";
import AddPost from "./components/pages/AddPost/AddPost";
import EditPost from "./components/pages/EditPost/EditPost";
import HomePage from "./components/pages/HomePage/HomePage";
import NotFound from "./components/pages/NotFound/NotFound";
import SinglePost from "./components/pages/SinglePost/SinglePost";
import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";

const App = () => {
  return (
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/post/:id' element={<SinglePost />} />
          <Route path='/post/add' element={<AddPost />} />
          <Route path='/post/edit/:id' element={<EditPost />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
  );
};

export default App;
