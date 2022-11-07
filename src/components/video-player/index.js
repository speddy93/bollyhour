import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
    const videoEl = useRef(null);

    // const attemptPlay = () => {
    //   videoEl &&
    //     videoEl.current &&
    //     videoEl.current.play().catch(error => {
    //       console.error("Error attempting to play", error);
    //     });
    // };

    // useEffect(() => {
    //   attemptPlay();
    // }, []);


    const url = "https://www.youtube.com/embed/r0UrxvmuUmw"
    return <ReactPlayer
      url={url}
      controls
      ref={videoEl}
      playing={true}
    />
}

export default VideoPlayer;
