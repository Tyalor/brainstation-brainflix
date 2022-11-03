import './App.scss';
import { useState } from 'react';
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

  const [activeVideo, setActiveVideo] = useState(videosDataDetails[0])

  const clickHandler = (id) => {
    let newActiveVideo = videosDataDetails.find(video => video.id === id)
    console.log(id)
    setActiveVideo(newActiveVideo)
  }

  return (
    <>
      <Header />
      <div>
        <VideoPlayer activeVideo={activeVideo}/>
        <VideoDesc activeVideo={activeVideo} />
        <VideoComments activeVideo={activeVideo} />
        <VideoList activeVideo={activeVideo} videosData={videosData} clickHandler={clickHandler} />
      </div>
    </>
  );
}

export default App;
