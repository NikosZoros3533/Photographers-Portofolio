import { createPortal } from "react-dom";


export default function Button({menuState,onClick}) {
    
    let cssForButton = "toggle-button";
    if (menuState) {
      cssForButton += " pressed";
    }
  return createPortal(
    <button className={cssForButton} onClick={onClick}>
        DioVele
      </button>,document.getElementById("menu-button")
  )
}
