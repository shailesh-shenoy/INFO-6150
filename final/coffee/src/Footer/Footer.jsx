import React from "react";

import "./Footer.css";

const footerLinks = [
  {
    text: "Home",
    link: "#/",
  },
  {
    text: "What is Coffee?",
    link: "#/about",
  },
  {
    text: "Privacy Policy",
    link: "#/privacy",
  },
];

function Footer({ setPage }) {
  return (
    // Footer Component
    <footer className="footer">
      {footerLinks.map((f) => {
        return (
          <a
            key={f.link}
            href={f.link}
            className="footer__link"
            onClick={(event) => {
              event.preventDefault();
              setPage(f.link);
            }}
          >
            {f.text}
          </a>
        );
      })}
      <p className="footer__copyright">© 2022 shenoy.sh</p>
    </footer>
  );
}

export default Footer;
