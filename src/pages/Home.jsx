import HomeNavigator from "../components/HomeNavigator";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailSharpIcon from "@mui/icons-material/AlternateEmailSharp";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                <FacebookSharpIcon className="menu-icon" fontSize="large" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dio_vele/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="menu-icon" fontSize="large" />
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=lucimorn12@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AlternateEmailSharpIcon
                  className="menu-icon"
                  fontSize="large"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="home-page section-2">
        <HomeNavigator />
      </div>
    </>
  );
}
