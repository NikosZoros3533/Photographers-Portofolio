import Img1 from "../assets/portaits/DSC00804-img1.jpg";
import Img2 from "../assets/portaits/DSC04630-img2.jpg";
import Img3 from "../assets/portaits/DSC07166-img3.jpg";
import Img4 from "../assets/portaits/DSC07183-img4.jpg";
import Img5 from "../assets/portaits/DSC07225.jpg";
import Img6 from "../assets/portaits/DSC07565.jpg";
import Img7 from "../assets/portaits/DSC09723.jpg";
import Img8 from "../assets/portaits/edit_1.jpg";
import Img9 from "../assets/portaits/edit.jpg";
import Img10 from "../assets/portaits/ekthesi_ 1.jpg";
import Img11 from "../assets/portaits/manos-8.jpg";
import Img12 from "../assets/portaits/manos-17.jpg";
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
];

export default function Portraits() {
  

  return (
    <div>
      <Gallery photos={photos} />
    </div>
  );
}
