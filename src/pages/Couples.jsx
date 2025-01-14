import { useEffect } from "react";
import Img1 from "../assets/couples/DSC02231.jpg";
import Img2 from "../assets/couples/DSC03213.jpg";
import Img3 from "../assets/couples/edited-1.jpg";
import Img4 from "../assets/couples/edited-2.jpg";
import Img5 from "../assets/couples/edited.jpg";
import Img6 from "../assets/couples/New1.jpg";
import Img7 from "../assets/couples/New2.jpg";
import Img8 from "../assets/couples/New3.jpg";
import Img9 from "../assets/couples/New4.jpg";
import Img10 from "../assets/couples/New5.jpg";
import Img11 from "../assets/couples/New6.jpg";
import Img12 from "../assets/couples/New7.jpg";
import Img13 from "../assets/couples/New8.jpg";
import Img14 from "../assets/couples/New9.jpg";
import Img15 from "../assets/couples/New10.jpg";
import Img16 from "../assets/couples/New11.jpg";

import Gallery from "../components/Gallery";

let photos = [
  {
    id: 1,
    imgSrc: Img1,
  },
  {
    id: 2,
    imgSrc: Img2,
  },
  {
    id: 3,
    imgSrc: Img3,
  },
  {
    id: 4,
    imgSrc: Img4,
  },
  {
    id: 5,
    imgSrc: Img5,
  },
  {
    id: 6,
    imgSrc: Img6,
  },
  {
    id: 7,
    imgSrc: Img7,
  },
  {
    id: 8,
    imgSrc: Img8,
  },
  {
    id: 9,
    imgSrc: Img9,
  },
  {
    id: 10,
    imgSrc: Img10,
  },
  {
    id: 11,
    imgSrc: Img11,
  },
  {
    id: 12,
    imgSrc: Img12,
  },
  {
    id: 13,
    imgSrc: Img13,
  },
  {
    id: 14,
    imgSrc: Img14,
  },
  {
    id: 15,
    imgSrc: Img15,
  },
  {
    id: 16,
    imgSrc: Img16,
  },
];

export default function Couples() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Gallery photos={photos} />
    </div>
  );
}
