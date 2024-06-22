import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Made with <span className="heart">❤</span> by{" "}
        <Link
          href="https://github.com/https://github.com/RaviJM"
          target="_blank"
          rel="noopener noreferrer"
        >
          RaviJM
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
