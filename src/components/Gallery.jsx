import { useState, useEffect} from "react";
import CloseIcon from '@mui/icons-material/Close';

export default function Gallery({ photos }) {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState();

  function getImg(imgSrc) {
    setTempImgSrc(imgSrc);
    setModel(true);
  }
  
  function handleEsc(event){
    if(event.key==='Escape'){
      setModel(false)
    }
  }

  useEffect(()=>{
    if(model){
      window.addEventListener('keydown',handleEsc)
    }
    return () => {
      window.removeEventListener('keydown',handleEsc)
    }
  },[model])
  

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc}/>
        <CloseIcon onClick={()=>setModel(false)} onKeyDown={(e)=>handleEsc(e)} tabIndex="0"/>
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
                className="photo-item"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
