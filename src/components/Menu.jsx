import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Menu() {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  function toggleNavbar() {
    setIsMenuVisible((prevStateNavbar) => !prevStateNavbar);
  }


  return (
    <div className="menu-container">
      <Button menuState={isMenuVisible} onClick={toggleNavbar} />
      {isMenuVisible && (
        <nav className="menu">
          <ul className="menu-list">
            <li>
              <Link to="/" onClick={toggleNavbar}>Home</Link>
            </li>
            <li>
              <Link to="/couples" onClick={toggleNavbar}>Couples</Link>
            </li>
            <li>
              <Link to="/portraits" onClick={toggleNavbar}>Portraits</Link>
            </li>
            <li>
              <Link to="/shops" onClick={toggleNavbar}>Shops</Link>
            </li>
            <li>
              <Link to="/studio-portraits" onClick={toggleNavbar}>Studio</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleNavbar}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleNavbar}>Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
