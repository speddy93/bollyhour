import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

// const stopVideo = (event) => {
//   event.target.stopVideo()
// }

const YoutubePlayer = ({playlist, start}) => {
  const [activeVideoId, setActiveVideoId] = useState(playlist[0]);
  const [shouldDrink, setShouldDrink] = useState(false);
  const timeDiff = 10;

  const incrementVideoId = () => {
    const index = playlist.indexOf(activeVideoId);
    if(playlist.length > index){
      setActiveVideoId(playlist[index+1])
    }
  }

  const onPlayerStateChange = (event) => {
    console.log(event);
    var done = false;
    if (event.data === 0) {
      setShouldDrink(true);
      incrementVideoId()
    } else if (event.data === -1 || event.data === 5){
      setShouldDrink(false);
      event.target.playVideo()
    } else {
      setShouldDrink(false)
    }

  }

  const onReady = (event) => {
    setShouldDrink(true);
    event.target.playVideo()
  };

  const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        start: start || 0,
        end: start + timeDiff || timeDiff,
      },
    };

  return (
    <div className="videoFrame" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <p>TEST TEXT</p>
      {shouldDrink && <img style={{positon: 'absolute', zIndex: 0}} className="cheers" src="https://giphy.com/clips/helloall-cheers-hello-all-4OPta6flqKAUVAkM5R" alt="Loading..."/> }
      <YouTube id="player" videoId={activeVideoId} opts={opts} onReady={(e)=>onReady(e)} onStateChange={(e) => onPlayerStateChange(e)} />
      <p>{activeVideoId}</p>
    </div>
  )
}

export default YoutubePlayer;
