import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '../../utils/apis';
import { useParams } from 'react-router-dom';
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";
import { VideoDesc } from '../../components/VideoDesc/VideoDesc';
import { VideoComments } from '../../components/VideoComments/VideoComments';
import { VideoList } from '../../components/VideoList/VideoList';

const Video = () => {
    
    const [videosData, setVideoData] = useState([])
    const [videosDetailedData, setVideoDetailedData] = useState([])
    const {videoId} = useParams()
    
    useEffect(() => {
      axios.get(`${API_URL}/videos/${videoId}/?api_key=${API_KEY}`)
      .then(res => {
        setVideoDetailedData(res.data)
      })
    }, [videoId])


    const clickHandler = (id) => {
      let newActiveVideo = videosData.find(video => video.id === id)
      setVideoData(newActiveVideo)
    }

    return (        
    <div className='video'>
        <VideoPlayer videosDetailedData={videosDetailedData}/>
        <div className='video__content-container'>
          <div className='video__content'>
            <VideoDesc videosDetailedData={videosDetailedData} />
            <VideoComments key={videoId} videosDetailedData={videosDetailedData} />
          </div>
            <VideoList clickHandler={clickHandler} />
      </div>
    </div>
    )
}

export { Video }