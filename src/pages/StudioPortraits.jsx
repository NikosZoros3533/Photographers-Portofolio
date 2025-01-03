import Img1 from "../assets/studio-portraits/DSC03544.jpg";
import Img2 from "../assets/studio-portraits/DSC03572.jpg";
import Img3 from "../assets/studio-portraits/DSC03694.jpg";
import Img4 from "../assets/studio-portraits/DSC04703.jpg";
import Img5 from "../assets/studio-portraits/DSC04838.jpg";
import Img6 from "../assets/studio-portraits/DSC05094.jpg";
import Img7 from "../assets/studio-portraits/DSC05270.jpg";
import Img8 from "../assets/studio-portraits/DSC05276.jpg";
import Img9 from "../assets/studio-portraits/DSC06253.jpg";
import Img10 from "../assets/studio-portraits/DSC06324.jpg";
import Img11 from "../assets/studio-portraits/DSC06379.jpg";
import Img12 from "../assets/studio-portraits/DSC06436.jpg";
import Img13 from "../assets/studio-portraits/DSC06492.jpg";
import Img14 from "../assets/studio-portraits/DSC06542.jpg";
import Img15 from "../assets/studio-portraits/DSC06804.jpg";
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
];

export default function StudioPortraits() {
  return (
    <div>
      <Gallery photos={photos} />
    </div>
  );
}
