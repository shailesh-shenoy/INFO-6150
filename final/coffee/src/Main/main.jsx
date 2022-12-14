import React from "react";

import "./Main.css";
import LandingPage from "../pages/LandingPage/LandingPage";
import HistoryPage from "../pages/HistoryPage/HistoryPage";
import FactsPage from "pages/FactsPage/FactsPage";
import QuizPage from "pages/QuizPage/QuizPage";
import AboutPage from "pages/AboutPage/AboutPage";
import PrivacyPage from "pages/PrivacyPage/PrivacyPage";

function Main({ page, setPage }) {
  return (
    // Main Component
    <main id="main-content" className="content">
      {(page === "#/" || page === "/" || page === "") && (
        <LandingPage setPage={setPage} />
      )}
      {page === "#/history" && <HistoryPage />}
      {page === "#/facts" && <FactsPage />}
      {page === "#/quiz" && <QuizPage />}
      {page === "#/about" && <AboutPage />}
      {page === "#/privacy" && <PrivacyPage />}
    </main>
  );
}

export default Main;
