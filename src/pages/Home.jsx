import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useEffect, lazy, Suspense } from "react";
import LoadSpinner from "../components/LoadSpinner.jsx";
import "../css/Home.css";

const Marque = lazy(() => import("../components/Marque.jsx"));

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sizeIcons = "2rem";
  return (
    <>
      <div className="home-page section-1">
        <label id="title-home-page" className="cssanimation fadeIn">
          DIOVELE
        </label>
        <div className="glass-box cssanimation fadeIn2">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/dionisis.belentakis?locale=el_GR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="menu-icon" size={sizeIcons} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dio_vele/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="menu-icon" size={sizeIcons} />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@diovele"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="menu-icon" size={sizeIcons} />
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=lucimorn12@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail className="menu-icon" size={sizeIcons} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="home-page">
        <Suspense fallback={<LoadSpinner />}>
          <Marque />
        </Suspense>
      </div>
    </>
  );
}
