import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__logo">
          <span className="footer__logo-initials">JC</span>
          <span className="footer__logo-name">Jeremiah Corpuz</span>
        </div>
        <p className="footer__copy">
          © {year} Jeremiah Corpuz · Frontend Engineer
        </p>
        <div className="footer__links">
          <a href="mailto:jeremiah.corpuz25@gmail.com" className="footer__link" id="footer-email">Email</a>
          <a href="https://www.linkedin.com/in/jeremiah-corpuz-9b6392195/" target="_blank" rel="noopener noreferrer" className="footer__link" id="footer-linkedin">LinkedIn</a>
          <a href="https://github.com/jeremiahcorpuz" target="_blank" rel="noopener noreferrer" className="footer__link" id="footer-github">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
