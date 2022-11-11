import { NavLink } from 'react-router-dom';
import './VideoList.scss';

const VideoList = ({ videoId, videosData, clickHandler }) => {

    return (
        <div className="list">
            <div className="list__container">
                <h3 className="list__heading">Next Videos</h3>
                <div className="list__item-container">
                {
                videosData ?    
                    videosData.map(e => 
                        videosData.id!== e.id ?
                        <NavLink to={e.id}>

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
                        : ''
                    )
                : ""
                }
                    
                </div>
            </div>
        </div>
    )
}

export { VideoList }