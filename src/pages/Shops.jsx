import Img1 from "../assets/shops/Coctail1.webp";
import Img2 from "../assets/shops/Coctail2.webp";
import Img3 from "../assets/shops/Coctail3.webp";
import Img4 from "../assets/shops/Coctail4.webp";
import Img5 from "../assets/shops/Coctail5.webp";
import Img6 from "../assets/shops/Coctail6.webp";
import Img7 from "../assets/shops/Coctail7.webp";
import Img8 from "../assets/shops/Food1.webp";
import Img9 from "../assets/shops/Food2.webp";
import Img10 from "../assets/shops/Food3.webp";
import Img11 from "../assets/shops/Food4.webp";
import Img12 from "../assets/shops/Food5.webp";
import Img13 from "../assets/shops/Food6.webp";
import Img14 from "../assets/shops/Food7.webp";
import Img15 from "../assets/shops/Food8.webp";
import Img16 from "../assets/shops/Food9.webp";
import Img17 from "../assets/shops/Food10.webp";
import Img18 from "../assets/shops/Food11.webp";
import Img19 from "../assets/shops/Food12.webp";
import Img20 from "../assets/shops/Food13.webp";
import Img21 from "../assets/shops/Food14.webp";
import Img22 from "../assets/shops/Food15.webp";
import Img23 from "../assets/shops/Food16.webp";
import Img24 from "../assets/shops/Food17.webp";
import Img25 from "../assets/shops/Food18.webp";
import Img26 from "../assets/shops/Food19.webp";
import Img27 from "../assets/shops/Food20.webp";
import Img28 from "../assets/shops/Food21.webp";
import Img29 from "../assets/shops/Food22.webp";
import Img30 from "../assets/shops/Food23.webp";
import Img31 from "../assets/shops/Food24.webp";
import Img32 from "../assets/shops/Food25.webp";
import Img33 from "../assets/shops/Food26.webp";
import Img34 from "../assets/shops/Food27.webp";
import Img35 from "../assets/shops/Food28.webp";
import Img36 from "../assets/shops/Food29.webp";
import Img37 from "../assets/shops/Food30.webp";
import Img38 from "../assets/shops/Food31.webp";
import Img39 from "../assets/shops/Food32.webp";
import Img40 from "../assets/shops/Food33.webp";
import Img41 from "../assets/shops/Food34.webp";
import Img42 from "../assets/shops/Food35.webp";
import Img43 from "../assets/shops/Food36.webp";
import Img44 from "../assets/shops/Food37.webp";
import Img45 from "../assets/shops/Food38.webp";
import Img46 from "../assets/shops/Food39.webp";
import Img47 from "../assets/shops/Food40.webp";
import Img48 from "../assets/shops/Food41.webp";
import Img49 from "../assets/shops/New1.webp";
import Img50 from "../assets/shops/New2.webp";
import Img51 from "../assets/shops/New3.webp";
import Img52 from "../assets/shops/New4.webp";
import Img53 from "../assets/shops/New5.webp";
import Img54 from "../assets/shops/New6.webp";
import Img55 from "../assets/shops/New7.webp";
import Img56 from "../assets/shops/New8.webp";
import Img57 from "../assets/shops/New9.webp";
import Img58 from "../assets/shops/New10.webp";
import Img59 from "../assets/shops/New11.webp";
import Img60 from "../assets/shops/New12.webp";
import Img61 from "../assets/shops/New13.webp";
import Img62 from "../assets/shops/New14.webp";

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
  {
    id: 24,
    imgSrc: Img24,
  },
  {
    id: 25,
    imgSrc: Img25,
  },
  {
    id: 26,
    imgSrc: Img26,
  },
  {
    id: 27,
    imgSrc: Img27,
  },
  {
    id: 28,
    imgSrc: Img28,
  },
  {
    id: 29,
    imgSrc: Img29,
  },
  {
    id: 30,
    imgSrc: Img30,
  },
  {
    id: 31,
    imgSrc: Img31,
  },
  {
    id: 32,
    imgSrc: Img32,
  },
  {
    id: 33,
    imgSrc: Img33,
  },
  {
    id: 34,
    imgSrc: Img34,
  },
  {
    id: 35,
    imgSrc: Img35,
  },
  {
    id: 36,
    imgSrc: Img36,
  },
  {
    id: 37,
    imgSrc: Img37,
  },
  {
    id: 38,
    imgSrc: Img38,
  },
  {
    id: 39,
    imgSrc: Img39,
  },
  {
    id: 40,
    imgSrc: Img40,
  },
  {
    id: 41,
    imgSrc: Img41,
  },
  {
    id: 42,
    imgSrc: Img42,
  },
  {
    id: 43,
    imgSrc: Img43,
  },
  {
    id: 44,
    imgSrc: Img44,
  },
  {
    id: 45,
    imgSrc: Img45,
  },
  {
    id: 46,
    imgSrc: Img46,
  },
  {
    id: 47,
    imgSrc: Img47,
  },
  {
    id: 48,
    imgSrc: Img48,
  },
  {
    id: 49,
    imgSrc: Img49,
  },
  {
    id: 50,
    imgSrc: Img50,
  },
  {
    id: 51,
    imgSrc: Img51,
  },
  {
    id: 52,
    imgSrc: Img52,
  },
  {
    id: 53,
    imgSrc: Img53,
  },
  {
    id: 54,
    imgSrc: Img54,
  },
  {
    id: 55,
    imgSrc: Img55,
  },
  {
    id: 56,
    imgSrc: Img56,
  },
  {
    id: 57,
    imgSrc: Img57,
  },
  {
    id: 58,
    imgSrc: Img58,
  },
  {
    id: 59,
    imgSrc: Img59,
  },
  {
    id: 60,
    imgSrc: Img60,
  },
  {
    id: 61,
    imgSrc: Img61,
  },
  {
    id: 62,
    imgSrc: Img62,
  },
];

const Gallery = lazy(() => import("../components/Gallery"));

export default function Shops() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<LoadSpinner />}>
      <Gallery photos={photos} />
    </Suspense>
  );
}
