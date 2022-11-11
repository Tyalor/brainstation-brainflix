import { useEffect, useState } from 'react';
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";
import { VideoDesc } from '../../components/VideoDesc/VideoDesc';
import { VideoComments } from '../../components/VideoComments/VideoComments';
import { VideoList } from '../../components/VideoList/VideoList';
import { API_URL, API_KEY } from '../../utils/apis';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// import videosData from '../../data/videos.json'
// import videosDataDetails from '../../data/video-details.json'




const Video = () => {
    
    // const [activeVideo, setActiveVideo] = useState([])
    const [videosData, setVideoData] = useState([])
    const [videosDetailedData, setVideoDetailedData] = useState([])
    const {videoId} = useParams()
    
    useEffect(() => {
      axios.get(`${API_URL}/videos/?api_key=${API_KEY}`)
      .then(res => {
        // console.log(res.data)
        setVideoData(res.data)
      })
    }, [])  

    useEffect(() => {
      axios.get(`${API_URL}/videos/${videoId}/?api_key=${API_KEY}`)
      .then(res => {
        setVideoDetailedData(res.data)
      })
    }, [videoId])

    const clickHandler = (id) => {
      let newActiveVideo = videosData.find(video => video.id === id)
      console.log(id)
      setVideoData(newActiveVideo)
    }

    return (        
    <div className='video'>
        {/* <VideoPlayer videosDetailData={videosDetailedData}/> */}
        <div className='video__content-container'>
          <div className='video__content'>
            {/* <VideoDesc videosData={videosData} /> */}
            {/* <VideoComments videosData={videosData} /> */}
          </div>
            <VideoList key={videoId} videoId={videoId} videosData={videosData} clickHandler={clickHandler} />
      </div>
    </div>
    )
}

export { Video }
