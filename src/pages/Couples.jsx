import { useEffect } from "react";
import Img1 from "../assets/couples/DSC02231.jpg";
import Img2 from "../assets/couples/DSC03213.jpg";
import Img3 from "../assets/couples/edited-1.jpg";
import Img4 from "../assets/couples/edited-2.jpg";
import Img5 from "../assets/couples/edited.jpg";
import Img6 from "../assets/couples/edited2.jpg";

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
