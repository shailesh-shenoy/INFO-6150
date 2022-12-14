import { useState } from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  const [page, setPage] = useState("#/");
  const [theme, setTheme] = useState("dark");
  return (
    <div className={`app app--${theme}`}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header setPage={setPage} setTheme={setTheme} />
      <Main page={page} setPage={setPage} />
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
