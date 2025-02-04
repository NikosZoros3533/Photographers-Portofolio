import React from 'react'
import "../css/Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Logo from "../assets/dioVeleLogo.png"

export default function Footer() {
    const sizeIcons = "1.3rem";
  return (
    <footer className="footer">
      <p>
        &copy; 2025 <span className="brand">DioVele</span>
      </p>
      <img src={Logo} alt="Logo" />


      <nav>
      <a
                href="https://www.facebook.com/dionisis.belentakis?locale=el_GR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="menu-icon" size={sizeIcons} />
              </a>
              <a
                href="https://www.instagram.com/dio_vele/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="menu-icon" size={sizeIcons} />
              </a>
              <a
                href="https://www.tiktok.com/@diovele"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="menu-icon" size={sizeIcons} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=lucimorn12@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail className="menu-icon" size={sizeIcons} />
              </a>
      </nav>
    </footer>
  )
}
