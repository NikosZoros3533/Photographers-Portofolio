import "../css/About.css"; // Import the CSS file
import { useEffect } from "react";
import heroIcon from "../assets/heroIcon.jpg"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-container">
      <div className="about-content">
        <img
          src={heroIcon}
          alt="heroicon"
          className="about-image"
        />
        <div className="about-text">
          <h1 className="about-title">Dionisis Velentakis</h1>
          <p className="about-description">
            Skyler Knutzen is a homegrown Iowan and now New York-based Director, DP, and Editor. 
            He is interested in capturing present memories that garner their importance in the future 
            and how everyday life is wrapped up in memory, mortality, and familial connections. 
            His work focuses on documentaries, docu-branded commercials, and live music.
          </p>
          <p className="about-description">
            His work as a DP and editor has screened at SXSW 2023, Netflix 
             
            and Sundance Film Festival 2022, Paramount+ 
           . 
            His work as a director has screened at Nowness, Vimeo Staff Pick 
            , 
            and other film festivals.
          </p>
          <p className="about-description">
            Partial client list: The Guardian, Huffington Post, Maybelline, Interscope Records, Lincoln Center, Nars Cosmetics, Playbill, and more.
          </p>
          <p className="about-contact">Contact: knutzen.skyler@gmail.com</p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
