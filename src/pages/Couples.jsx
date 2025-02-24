import Img1 from "../assets/couples/DSC02231.webp";
import Img2 from "../assets/couples/DSC03213.webp";
import Img3 from "../assets/couples/edited-1.webp";
import Img4 from "../assets/couples/edited-2.webp";
import Img5 from "../assets/couples/edited.webp";
import Img6 from "../assets/couples/New1.webp";
import Img7 from "../assets/couples/New2.webp";
import Img8 from "../assets/couples/New3.webp";
import Img9 from "../assets/couples/New4.webp";
import Img10 from "../assets/couples/New5.webp";
import Img11 from "../assets/couples/New6.webp";
import Img12 from "../assets/couples/New7.webp";
import Img13 from "../assets/couples/New8.webp";
import Img14 from "../assets/couples/New9.webp";
import Img15 from "../assets/couples/New10.webp";
import Img16 from "../assets/couples/New11.webp";

// import Gallery from "../components/Gallery";
import { useEffect, lazy, Suspense } from "react";
import LoadSpinner from "../components/LoadSpinner";

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

const Gallery = lazy(() => import("../components/Gallery"));

export default function Couples() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense fallback={<LoadSpinner />}>
      <Gallery photos={photos} />
    </Suspense>
  );
}
