import React, { useState, useEffect } from "react";
import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <p className={style.paragraph}>
      made with ❤️ by{" "}
      <a
        href="https://github.com/julianFBarbosa"
        target="_blank"
        rel="noopener noreferrer"
      >
        Julian Barbosa
      </a>
    </p>
  );
};
