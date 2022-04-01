import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { Col, Container, Row } from "react-bootstrap";

import { SearchContext } from "./context/SearchContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <SearchContext>
        <Container className="mb-5">
          <Row>
            <Col xs={12}>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Routes />
            </Col>
          </Row>
          <Footer />
        </Container>
      </SearchContext>
    </BrowserRouter>
  );
}

export default App;
