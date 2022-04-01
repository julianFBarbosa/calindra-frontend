import { useState, useContext } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SearchContextValue } from "../../context/SearchContext";

export const SearchBar = () => {
  const { search, setSearch } = useContext(SearchContextValue);
  const [field, setField] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setField(target.value);
  };

  const handleEnter = (event) => {
    if (event.code !== "Enter" || event.keyCode !== 13) return;

    handleSearch(event.target.value);
  };

  const handleSearch = (product) => {
    setSearch(field);
    navigate(`/produtos/${product}`);
  };

  return (
    <FloatingLabel label="Busque um produto" className="d-flex gap-3">
      <Form.Control
        placeholder="Leave a comment here"
        value={field}
        onChange={handleChange}
        onKeyUp={handleEnter}
      />
      <Button
        variant="success"
        type="submit"
        onClick={() => handleSearch(search)}
      >
        Buscar
      </Button>
    </FloatingLabel>
  );
};
