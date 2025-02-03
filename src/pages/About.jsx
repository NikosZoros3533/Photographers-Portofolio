import "../css/About.css"; // Import the CSS file
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <h1>Hello</h1>
  );
};

export default About;
