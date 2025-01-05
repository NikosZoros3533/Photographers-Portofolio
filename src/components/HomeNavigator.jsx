import couplesImg from "../assets/couples/edited-1.jpg";
import portraitsImg from "../assets/portaits/edit_1.jpg";
import shopsImg from "../assets/shops/Coctail2.jpg";
import studioImg from "../assets/studio-portraits/DSC04838.jpg";
import { Link } from "react-router-dom";

export default function HomeNavigator() {
  let cssImageContaner = "image-container";
  return (
    <div className="images-container">
      <Link to="/couples" className={cssImageContaner}>
        <img src={couplesImg} alt="couplesImg" className="image-menu" />
        <h2>Couples</h2>
      </Link>
      <Link to="/portraits" className={cssImageContaner}>
        <img src={portraitsImg} alt="portraitsImg" className="image-menu" />
        <h2>Portraits</h2>
      </Link>
      <Link to="/food" className={cssImageContaner}>
        <img src={shopsImg} alt="shopsImg" className="image-menu" />
        <h2>Food & Beverages</h2>
      </Link>
      <Link to="/studio-portraits" className={cssImageContaner}>
        <img src={studioImg} alt="studioImg" className="image-menu" />
        <h2>Studio</h2>
      </Link>
    </div>
  );
}
