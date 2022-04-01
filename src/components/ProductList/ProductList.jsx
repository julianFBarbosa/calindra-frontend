import React, { useState, useEffect, useContext } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import ProductService from "../../services/ProductService.js";

import { Spinner, Row, Col, Card, ListGroup } from "react-bootstrap";
import { SearchContextValue } from "../../context/SearchContext.js";

export const ProductList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { search, setSearch } = useContext(SearchContextValue);

  useEffect(() => {
    (async () => {
      try {
        setError(null);
        setIsLoading(true);
        const request = await ProductService.listProducts(
          search.replaceAll("-", " ")
        );

        setData(request);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [search]);

  if (isLoading) {
    return (
      <div>
        <Helmet>
          <title>{search} | Lojinha</title>
        </Helmet>
        <div className="text-center">
          <p>Carregando...</p>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Helmet>
          <title>{search} | Lojinha</title>
        </Helmet>
        <div className="text-center">
          <p>
            Infelizmente não foi possível encontrar o produto desejado, tente
            novamente
          </p>
        </div>
      </div>
    );
  }

  if (data) {
    return (
      <>
        <Helmet>
          <title>{search} | Lojinha</title>
        </Helmet>
        <div>
          <Row xs={1} lg={3} md={2} className="g-4">
            {data.products.map((product) => (
              <Col key={product.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      <span>
                        Visualizações: {product._meta.visitsClickCount}
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            <Col>
              <div>
                <h4 className="mt-4 mb-2">Pesquise também por:</h4>
                <ListGroup>
                  {data.suggestions.map((suggestion) => (
                    <ListGroup.Item key={suggestion.term}>
                      <Link
                        to={`/produtos/${suggestion.term.replaceAll(" ", "-")}`}
                        onClick={() => setSearch(suggestion.term)}
                      >
                        {suggestion.term}
                      </Link>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }

  return <p>abc</p>;
};
