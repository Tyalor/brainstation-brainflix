import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../../utils/APIs';
import { useParams } from 'react-router-dom';
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";
import { VideoDesc } from '../../components/VideoDesc/VideoDesc';
import { VideoComments } from '../../components/VideoComments/VideoComments';
import { VideoList } from '../../components/VideoList/VideoList';

const Video = () => {
    
    const [videosDetailedData, setVideoDetailedData] = useState([])
    const {videoId} = useParams()
    
    useEffect(() => {
      axios.get(`${API_URL}/videos/${videoId}/`)
      .then(res => {
        setVideoDetailedData(res.data)
      })
    }, [videoId])


    return (        
    <div className='video'>
        <VideoPlayer videosDetailedData={videosDetailedData}/>
        <div className='video__content-container'>
          <div className='video__content'>
            <VideoDesc videosDetailedData={videosDetailedData} />
            <VideoComments key={videoId} videosDetailedData={videosDetailedData} setVideoDetailedData={setVideoDetailedData}/>
          </div>
            <VideoList videoId={videoId}/>
      </div>
    </div>
    )
}

export { Video }