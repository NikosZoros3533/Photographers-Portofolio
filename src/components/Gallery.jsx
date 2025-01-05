import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Banner from "./Banner";


export default function Gallery({ photos }) {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState();

  function getImg(imgSrc) {
    if (tempImgSrc !== imgSrc) {
      setTempImgSrc(imgSrc);
    }

    setModel(true);
  }

  function handleEsc(event) {
    if (event.key === "Escape") {
      setModel(false);
    }
  }

  useEffect(() => {
    if (model) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [model]);

  return (
    <>
    <Banner />
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} />
        <CloseIcon
          onClick={() => setModel(false)}
          onKeyDown={(e) => handleEsc(e)}
          role="button"
          aria-label="Close gallery"
          tabIndex="0"
        />
      </div>
      <div className="gallery">
        
        {photos.map((photo) => {
          return (
            <div
              className="pics"
              key={photo.id}
              onClick={() => getImg(photo.imgSrc)}
            >
              <img
                src={photo.imgSrc}
                alt={`photo ${photo.id}`}
                loading="lazy"
                className="photo-item"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
