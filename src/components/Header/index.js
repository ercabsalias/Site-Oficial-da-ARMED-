import "./style.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img
          src="https://www.armed.gov.ao/img/logo/logoArmed.svg"
          alt="ARMED"
        />
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">SOBRE NÓS</Link>
          </li>
          <li>
            <Link to="/services">SERVIÇOS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACTOS</Link>
          </li>
        </ul>
      </nav>
      <div className="btn-login">
        <Link to="/login">
          <button>Entrar</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
