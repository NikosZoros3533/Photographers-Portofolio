import "../css/Exhibition.css";
import Img7 from "../assets/couples/New6.webp";
import Img10 from "../assets/couples/New9.webp";
import Img11 from "../assets/couples/New10.webp";
import Img13 from "../assets/portaits/DSC00804-img1.webp";
import Img14 from "../assets/portaits/DSC07183-img4.webp";
import Img16 from "../assets/portaits/DSC07565.webp";
import Img17 from "../assets/portaits/DSC09723.webp";
import Img18 from "../assets/portaits/edit_1.webp";
import Img19 from "../assets/portaits/edit.webp";
import Img20 from "../assets/portaits/ekthesi_1.webp";
import Img21 from "../assets/portaits/manos-17.webp";
import Img22 from "../assets/portaits/New2.webp";
import Img24 from "../assets/portaits/New4.webp";
import Img25 from "../assets/portaits/New5.webp";
import Img28 from "../assets/portaits/New8.webp";
import Img29 from "../assets/portaits/New9.webp";
import Img30 from "../assets/studio-portraits/DSC03572.webp";
import Img32 from "../assets/studio-portraits/DSC06324.webp";
import Img33 from "../assets/studio-portraits/DSC06379.webp";
import Img34 from "../assets/studio-portraits/DSC06492.webp";
import Img35 from "../assets/studio-portraits/DSC06542.webp";
import Img36 from "../assets/studio-portraits/DSC06804.webp";
import Img37 from "../assets/studio-portraits/New1.webp";
import Img38 from "../assets/studio-portraits/New3.webp";
import Img40 from "../assets/studio-portraits/New5.webp";
import Img43 from "../assets/studio-portraits/DSC03694.webp";
import { useEffect, useRef } from "react";

const images = [
  Img7,
  Img10,
  Img11,
  Img13,
  Img14,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20,
  Img21,
  Img22,
  Img24,
  Img25,
  Img28,
  Img29,
  Img30,
  Img32,
  Img33,
  Img34,
  Img35,
  Img36,
  Img37,
  Img38,
  Img40,
  Img43,
];

export default function Exhibition() {
  const rows = 4;
  const rowRefs = useRef([]);

  useEffect(() => {
    rowRefs.current.forEach((row) => {
      if (!row) return;


      const speed = 0.3;
      let scrollAmount = 0;

      const scrollRow = () => {
        scrollAmount -= speed;
        row.style.transform = `translateX(${scrollAmount}px)`;

        if (Math.abs(scrollAmount) >= row.scrollWidth / 2) {
          scrollAmount = 0; // Reset for a seamless loop
        }
        requestAnimationFrame(scrollRow);
      };
      scrollRow();
    });
  }, []);

  return (
    <div className="masonry-container">
      <label>Be yourself. Everyone else is already taken.</label>
      {[...Array(rows)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="masonry-row"
          ref={(el) => (rowRefs.current[rowIndex] = el)}
        >
          {[...images]
            .sort(() => Math.random() - 0.5)
            .map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={index+1}
                className="masonry-image"
                loading="lazy"
              />
            ))}
        </div>
      ))}
    </div>
  );
}
