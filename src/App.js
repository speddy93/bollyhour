import logo from './logo.svg';
import { Routes, Route } from "react-router-dom"
import './App.css';
import YoutubePlayer from './components/youtube/'
import VideoPlayer from './components/video-player/'
import Home from './pages/Home'
import Header from './components/header/'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes>
    </div>
  );
}

export default App;
