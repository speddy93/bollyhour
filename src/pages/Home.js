import React from 'react'
import YoutubePlayer from '../components/youtube/'
import VideoPlayer from '../components/video-player/'


const Home = () => {
  return (
    <div className="App">
        <YoutubePlayer playlist={["cI6r2GtiQx8","BeJqgI6rw9k","k4yXQkG2s1E","II2EO3Nw4m0", "0WtRNGubWGA"]} />
    </div>
  )
}

export default Home;
