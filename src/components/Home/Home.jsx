import React from "react";
import Helmet from "react-helmet";

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Lojinha</title>
      </Helmet>
      <div>
        <p className="text-center">
          Busque um produto na caixa de pesquisa acima
        </p>
      </div>
    </div>
  );
};
