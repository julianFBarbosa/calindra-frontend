import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { SearchBar } from "../SearchBar";

export const Header = () => {
  return (
    <Card className="my-3">
      <Card.Body className="d-flex justify-content-start justify-content-md-between align-items-center flex-column flex-md-row">
        <Card.Title>
          <Link to="/" className="text-dark text-decoration-none">Lojinha</Link>
        </Card.Title>
        <SearchBar />
      </Card.Body>
    </Card>
  );
};
