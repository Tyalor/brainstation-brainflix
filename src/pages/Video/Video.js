import { useState } from 'react';
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer';
import { VideoDesc } from './components/VideoDesc/VideoDesc';
import { VideoComments } from './components/VideoComments/VideoComments';
import { VideoList } from './components/VideoList/VideoList';
import videosData from './data/videos.json'
import videosDataDetails from './data/video-details.json'




const Video = () => {
    
      const [activeVideo, setActiveVideo] = useState(videosDataDetails[0])
    
      const clickHandler = (id) => {
        let newActiveVideo = videosDataDetails.find(video => video.id === id)
        console.log(id)
        setActiveVideo(newActiveVideo)
      }
    
    <div className='video'>
        <VideoPlayer activeVideo={activeVideo}/>
        <div className='video__content-container'>
          <div className='video__content'>
            <VideoDesc activeVideo={activeVideo} />
            <VideoComments activeVideo={activeVideo} />
          </div>
        <VideoList activeVideo={activeVideo} videosData={videosData} clickHandler={clickHandler} />
      </div>
    </div>
}

export { Video }