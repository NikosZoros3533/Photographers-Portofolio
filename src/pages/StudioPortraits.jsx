import { useEffect, lazy, Suspense } from "react";
import Img1 from "/studio-portraits/DSC03544.webp";
import Img2 from "/studio-portraits/DSC03572.webp";
import Img3 from "/studio-portraits/DSC03694.webp";
import Img4 from "/studio-portraits/DSC04703.webp";
import Img5 from "/studio-portraits/DSC04838.webp";
import Img6 from "/studio-portraits/DSC05094.webp";
import Img7 from "/studio-portraits/DSC05270.webp";
import Img8 from "/studio-portraits/DSC05276.webp";
import Img9 from "/studio-portraits/DSC06253.webp";
import Img10 from "/studio-portraits/DSC06324.webp";
import Img11 from "/studio-portraits/DSC06379.webp";
import Img12 from "/studio-portraits/DSC06436.webp";
import Img13 from "/studio-portraits/DSC06492.webp";
import Img14 from "/studio-portraits/DSC06542.webp";
import Img15 from "/studio-portraits/DSC06804.webp";
import Img16 from "/studio-portraits/New1.webp";
import Img17 from "/studio-portraits/New2.webp";
import Img18 from "/studio-portraits/New3.webp";
import Img19 from "/studio-portraits/New4.webp";
import Img20 from "/studio-portraits/New5.webp";
import Img21 from "/studio-portraits/New6.webp";
import Img22 from "/studio-portraits/New7.webp";
import Img23 from "/studio-portraits/New8.webp";
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
  {
    id: 17,
    imgSrc: Img17,
  },
  {
    id: 18,
    imgSrc: Img18,
  },
  {
    id: 19,
    imgSrc: Img19,
  },
  {
    id: 20,
    imgSrc: Img20,
  },
  {
    id: 21,
    imgSrc: Img21,
  },
  {
    id: 22,
    imgSrc: Img22,
  },
  {
    id: 23,
    imgSrc: Img23,
  },
];
const Gallery = lazy(() => import("../components/Gallery"));
export default function StudioPortraits() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<LoadSpinner />}>
      <Gallery photos={photos} />
    </Suspense>
  );
}
