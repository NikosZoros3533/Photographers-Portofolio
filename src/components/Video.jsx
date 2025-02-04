import { useRef } from "react"
import videoBg from "../assets/DioVeleVideo.mp4"
import "../css/Video.css"

export default function Video() {
  const video = useRef()
  video.current.playbackRate = 0.7;
  return (
    <div className="main-video">
        <video src={videoBg} autoPlay loop muted ref={video}></video>
        <div className="video-content">
          <h1>Award Winning Photos</h1>
        </div>
    </div>
  )
}
