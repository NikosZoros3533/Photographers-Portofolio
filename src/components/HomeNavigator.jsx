import couplesImg from "../assets/couples/edited-1.jpg"
import portraitsImg from "../assets/portaits/edit_1.jpg"
import shopsImg from "../assets/shops/Coctail2.jpg"
import studioImg from "../assets/studio-portraits/DSC04838.jpg"
import { Link } from "react-router-dom";


export default function HomeNavigator() {
  return (
    <div className="image-container">
      <Link to="/couples"><img src={couplesImg} alt="couplesImg" className="image-menu"/></Link>
      <Link to="/portraits"><img src={portraitsImg} alt="portraitsImg" className="image-menu"/></Link>
      <Link to="/shops"><img src={shopsImg} alt="shopsImg" className="image-menu"/></Link>
      <Link to="/studio-portraits"><img src={studioImg} alt="studioImg" className="image-menu"/></Link>
    </div>
  );
}
