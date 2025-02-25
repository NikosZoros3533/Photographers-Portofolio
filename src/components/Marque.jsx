import Img7 from "/couples/New6.webp";
import Img10 from "/couples/New9.webp";
import Img11 from "/couples/New10.webp";
import Img13 from "/portaits/DSC00804-img1.webp";
import Img14 from "/portaits/DSC07183-img4.webp";
import Img16 from "/portaits/DSC07565.webp";
import Img17 from "/portaits/DSC09723.webp";
import Img18 from "/portaits/edit_1.webp";
import Img19 from "/portaits/edit.webp";
import Img20 from "/portaits/ekthesi_1.webp";
import Img21 from "/portaits/manos-17.webp";
import Img22 from "/portaits/New2.webp";
import Img24 from "/portaits/New4.webp";
import Img25 from "/portaits/New5.webp";
import Img28 from "/portaits/New8.webp";
import Img29 from "/portaits/New9.webp";
import Img30 from "/studio-portraits/DSC03572.webp";
import Img32 from "/studio-portraits/DSC06324.webp";
import Img33 from "/studio-portraits/DSC06379.webp";
import Img34 from "/studio-portraits/DSC06492.webp";
import Img35 from "/studio-portraits/DSC06542.webp";
import Img36 from "/studio-portraits/DSC06804.webp";
import Img37 from "/studio-portraits/New1.webp";
import Img38 from "/studio-portraits/New3.webp";
import Img40 from "/studio-portraits/New5.webp";
import Img43 from "/studio-portraits/DSC03694.webp";
import Marquee from "react-fast-marquee";
import "../css/Marque.css";
import { useMemo } from "react";

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
const images2 = [
  Img10,
  Img13,
  Img16,
  Img18,
  Img11,
  Img17,
  Img7,
  Img19,
  Img14,
  Img24,
  Img21,
  Img20,
  Img22,
  Img33,
  Img25,
  Img29,
  Img30,
  Img38,
  Img32,
  Img34,
  Img43,
  Img40,
  Img28,
  Img36,
  Img35,
  Img37,
];
const images3 = [
  Img11,
  Img7,
  Img24,
  Img17,
  Img16,
  Img18,
  Img19,
  Img21,
  Img20,
  Img22,
  Img25,
  Img38,
  Img14,
  Img28,
  Img10,
  Img13,
  Img32,
  Img29,
  Img43,
  Img35,
  Img40,
  Img37,
  Img30,
  Img33,
  Img34,
  Img36,
];
const images4 = [
  Img16,
  Img13,
  Img19,
  Img21,
  Img20,
  Img7,
  Img14,
  Img43,
  Img10,
  Img22,
  Img11,
  Img24,
  Img18,
  Img28,
  Img30,
  Img35,
  Img25,
  Img38,
  Img17,
  Img40,
  Img33,
  Img37,
  Img32,
  Img34,
  Img36,
  Img29,
];

const imageArrays = [images, images2, images3, images4];
export default function Marque() {
  return (
    <div className="marque-container">
      <label>Be yourself. Everyone else is already taken.</label>
      {imageArrays.map((imageArray, index) => (
        <Marquee autoFill={true} className="marque-row" key={index}>
          {imageArray.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="image"
              className="marque-image"
              loading="lazy"
            />
          ))}
        </Marquee>
      ))}
    </div>
  );
}
