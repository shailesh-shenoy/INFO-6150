import React from "react";
import Home from "./Home";
import Theories from "./Theories";
import About from "./About";

function Main({ page, setPage }) {
  return (
    <main className="content" id="main">
      {(page === "#/" || page === "/" || page === "") && <Home />}
      {page === "#/theories" && <Theories setPage={setPage} />}
      {page === "#/about" && <About />}
    </main>
  );
}

export default Main;
