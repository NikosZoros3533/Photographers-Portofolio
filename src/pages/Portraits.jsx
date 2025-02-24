import Img1 from "../assets/portaits/New11.webp";
import Img2 from "../assets/portaits/DSC04630-img2.webp";
import Img3 from "../assets/portaits/DSC07166-img3.webp";
import Img4 from "../assets/portaits/DSC07183-img4.webp";
import Img5 from "../assets/portaits/DSC07225.webp";
import Img6 from "../assets/portaits/DSC07565.webp";
import Img7 from "../assets/portaits/DSC09723.webp";
import Img8 from "../assets/portaits/edit_1.webp";
import Img9 from "../assets/portaits/edit.webp";
import Img10 from "../assets/portaits/ekthesi_1.webp";
import Img11 from "../assets/portaits/manos-8.webp";
import Img12 from "../assets/portaits/manos-17.webp";
import Img13 from "../assets/portaits/New1.webp";
import Img14 from "../assets/portaits/New2.webp";
import Img15 from "../assets/portaits/New3.webp";
import Img16 from "../assets/portaits/New4.webp";
import Img17 from "../assets/portaits/New5.webp";
import Img18 from "../assets/portaits/New6.webp";
import Img19 from "../assets/portaits/New7.webp";
import Img20 from "../assets/portaits/New8.webp";
import Img21 from "../assets/portaits/New9.webp";
import Img22 from "../assets/portaits/New10.webp";
import Img23 from "../assets/portaits/DSC00804-img1.webp";

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

export default function Portraits() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense fallback={<LoadSpinner />}>
      <Gallery photos={photos} />
    </Suspense>
  );
}
