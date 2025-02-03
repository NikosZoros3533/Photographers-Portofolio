import { useState, useEffect, memo, useCallback } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Banner from "./Banner";
import LoadSpinner from "./LoadSpinner";
import "../css/Gallery.css"

const Gallery = memo(({ photos }) => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState(null);
  const [show, setShow] = useState("hidden");
  const [showSpinner, setShowSpinner] = useState(false);

  const getImg = useCallback(function getImg(imgSrc) {
    if (tempImgSrc !== imgSrc) {
      setTempImgSrc(imgSrc);
    }

    setModel(true);
  });

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      setModel(false);
    } else if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      navigateImages(event.key);
    }
  }


  function navigateImages(direction) {
    if (!tempImgSrc) return;

    const currentIndex = photos.findIndex((photo) => photo.imgSrc === tempImgSrc);

    if (direction === "ArrowRight" && currentIndex < photos.length - 1) {
      setTempImgSrc(photos[currentIndex + 1].imgSrc);
    } else if (direction === "ArrowLeft" && currentIndex > 0) {
      setTempImgSrc(photos[currentIndex - 1].imgSrc);
    }
  }

  useEffect(() => {
    if (model) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [model,tempImgSrc]);

  useEffect(() => {
    setShowSpinner(true);
    const timer = setTimeout(() => {
      setShow("");
      setShowSpinner(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Banner />
      <div className={model ? "model open" : "model"}>
        {tempImgSrc && <img src={tempImgSrc} alt="Expanded View"/>}
        <CloseIcon
          onClick={() => setModel(false)}
          onKeyDown={(e) => handleKeyDown(e)}
          role="button"
          aria-label="Close gallery"
          tabIndex="0"
        />
      </div>
      {showSpinner && <LoadSpinner />}
      <div className="gallery" id={show}>
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
});

export default Gallery;
