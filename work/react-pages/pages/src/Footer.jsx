import React from "react";

function Footer() {
  return (
    //   Footer Component
    <footer className="footer">
      <a
        href="https://thecatsite.com/"
        target="_blank"
        rel="noreferrer"
        className="footer__link"
      >
        More Cats!
      </a>
      <a
        href="https://timesofindia.indiatimes.com/readersblog/like-to-call-my-blog/digital-privacy-is-a-myth-44442/"
        rel="noreferrer"
        target="_blank"
        className="footer__link"
      >
        Privacy Policy
      </a>
      <a
        href="https://www.instagram.com/simbasama21/?hl=en"
        rel="noreferrer"
        target="_blank"
        className="footer__link"
      >
        Social Media
      </a>
      <p className="footer__copyright">© 2022 shenoy.sh</p>
    </footer>
  );
}

export default Footer;
