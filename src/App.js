import './App.scss';
import Header from "./components/Header/Header"
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoDesc from './components/VideoDesc/VideoDesc';
import VideoComments from './components/VideoComments/VideoComments';

function App() {
  return (
    <>
      <Header />
      <div>
        <VideoPlayer />
        <VideoDesc />
        <VideoComments />
      </div>
    </>
  );
}

export default App;
