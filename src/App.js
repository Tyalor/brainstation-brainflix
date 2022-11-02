import './App.scss';
import Header from "./components/Header/Header"
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoDesc from './components/VideoDesc/VideoDesc';

function App() {
  return (
    <>
      <Header />
      <div>
        <VideoPlayer />
        <VideoDesc />
      </div>
    </>
  );
}

export default App;
