import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '../../utils/APIs';
import { useParams } from 'react-router-dom';
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";
import { VideoDesc } from '../../components/VideoDesc/VideoDesc';
import { VideoComments } from '../../components/VideoComments/VideoComments';
import { VideoList } from '../../components/VideoList/VideoList';

const Home = () => {
    
    const [videosData, setVideoData] = useState([])
    const [videosDetailedData, setVideoDetailedData] = useState([])
    const {videoId} = useParams()
   
    useEffect(() => {
      // Find a more elegant way to return to 0 index of videoId
      axios.get(`${API_URL}/videos/84e96018-4022-434e-80bf-000ce4cd12b8/`)
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

export { Home }