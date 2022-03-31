import React, { useState, useEffect } from "react";
// import styles from "./Header.module.scss";
import Helmet from "react-helmet";

export const PostList = () => {
  return (
    <div>
      <Helmet>
        <title>Lojinha | Busque um produto</title>
      </Helmet>
      <div>
        <label htmlFor="">
          <input type="text" />
        </label>
        <p>Não há nenhuma notícia cadastrada :(</p>
      </div>
    </div>
  );
};
