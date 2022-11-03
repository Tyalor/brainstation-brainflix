import './App.scss';
import { Header } from "./components/Header/Header"
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer';
import { VideoDesc } from './components/VideoDesc/VideoDesc';
import { VideoComments } from './components/VideoComments/VideoComments';
import { VideoList } from './components/VideoList/VideoList';
import videosData from './data/videos.json'
import videosDataDetails from './data/video-details.json'

function App() {

  // console.log(videosDataDetails)
  // console.log(videosDataDetails[0])
  // console.log(videosDataDetails[i].comments)

  return (
    <>
      <Header />
      <div>
        <VideoPlayer />
        <VideoDesc />
        <VideoComments videosDataDetails={videosDataDetails} />
        <VideoList videosData={videosData}/>
      </div>
    </>
  );
}

export default App;
