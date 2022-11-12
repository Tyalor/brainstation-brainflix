import './VideoList.scss';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '../../utils/apis';

const VideoList = ({ clickHandler }) => {

    const [videosData, setVideoData] = useState([])

    useEffect(() => {
      axios.get(`${API_URL}/videos/?api_key=${API_KEY}`)
      .then(res => {
        setVideoData(res.data)
      })
    }, [])  

    return (
        <div className="list">
            <div className="list__container">
                <h3 className="list__heading">Next Videos</h3>
                <div className="list__item-container">
                {
                // videosData?.map &&    
                    videosData.map(e => 
                        // videosData.id !== e.id ?
                        <NavLink to={`/videos/${e.id}`} key={e.id}>
                        <div className="list__item" key={e.id} onClick={() => {clickHandler(e.id)}}>
                            <div className="list__img-container">
                                <img className="list__img" src={e.image} alt="" />
                            </div>
                            <div className="list__copy">
                                <h4 className="list__title text--bold">{e.title}</h4>
                                <p className="list__user">{e.channel}</p>
                            </div>
                        </div>
                        </NavLink>
                        // : ''
                    )
                }   
                </div>
            </div>
        </div>
    )
}

export { VideoList }