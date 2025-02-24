import { useState, useEffect, useCallback } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Banner from "./Banner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../css/Gallery.css";

const Gallery = ({ photos }) => {

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState(null);

  const getImg = useCallback(function getImg(imgSrc) {
    if (tempImgSrc !== imgSrc) {
      setTempImgSrc(imgSrc);
    }

    setModel(true);
  },[tempImgSrc]);

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      setModel(false);
    } else if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      navigateImages(event.key);
    }
  }

  function navigateImages(direction) {
    if (!tempImgSrc) return;

    const currentIndex = photos.findIndex(
      (photo) => photo.imgSrc === tempImgSrc
    );

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
  }, [model, tempImgSrc]);

  return (
    <>
      <Banner />
      <div className={model ? "model open" : "model"}>
        {tempImgSrc && <img src={tempImgSrc} alt="Expanded View" />}
        <CloseIcon
          onClick={() => setModel(false)}
          onKeyDown={(e) => handleKeyDown(e)}
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
              <LazyLoadImage
                src={photo.imgSrc}
                alt={`photo ${photo.id}`}
                effect="blur"
                loading="lazy"
                className="photo-item"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
