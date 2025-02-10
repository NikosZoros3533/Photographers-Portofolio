import "../css/Exhibition.css";
import Img7 from "../assets/couples/New6.jpg";
import Img10 from "../assets/couples/New9.jpg";
import Img11 from "../assets/couples/New10.jpg";
import Img13 from "../assets/portaits/DSC00804-img1.jpg";
import Img14 from "../assets/portaits/DSC07183-img4.jpg";
import Img16 from "../assets/portaits/DSC07565.jpg";
import Img17 from "../assets/portaits/DSC09723.jpg";
import Img18 from "../assets/portaits/edit_1.jpg";
import Img19 from "../assets/portaits/edit.jpg";
import Img20 from "../assets/portaits/ekthesi_1.jpg";
import Img21 from "../assets/portaits/manos-17.jpg";
import Img22 from "../assets/portaits/New2.jpg";
import Img24 from "../assets/portaits/New4.jpg";
import Img25 from "../assets/portaits/New5.jpg";
import Img28 from "../assets/portaits/New8.jpg";
import Img29 from "../assets/portaits/New9.jpg";
import Img30 from "../assets/studio-portraits/DSC03572.jpg";
import Img32 from "../assets/studio-portraits/DSC06324.jpg";
import Img33 from "../assets/studio-portraits/DSC06379.jpg";
import Img34 from "../assets/studio-portraits/DSC06492.jpg";
import Img35 from "../assets/studio-portraits/DSC06542.jpg";
import Img36 from "../assets/studio-portraits/DSC06804.jpg";
import Img37 from "../assets/studio-portraits/New1.jpg";
import Img38 from "../assets/studio-portraits/New3.jpg";
import Img40 from "../assets/studio-portraits/New5.jpg";
import Img43 from "../assets/studio-portraits/DSC03694.jpg";
import { useState, useEffect, useRef } from "react";

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

      const direction = -1; // All rows move left
      const speed = 0.3;
      let scrollAmount = 0;

      const clone = row.innerHTML; // Duplicate content to create an infinite loop effect
      row.innerHTML += clone;

      const scrollRow = () => {
        scrollAmount += direction * speed;
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
      <h1>You cant jump into the same river.</h1>
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
                alt="Masonry"
                className="masonry-image"
              />
            ))}
        </div>
      ))}
    </div>
  );
}
