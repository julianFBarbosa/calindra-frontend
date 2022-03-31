import "./App.css";

import { SearchContext } from "./SearchContext";
import { Header } from "./components/Header";

import { Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <SearchContext>
        <Container>
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
        </Container>
        <Header />
      </SearchContext>
    </BrowserRouter>
  );
}

export default App;
