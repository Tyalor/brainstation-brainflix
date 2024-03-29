import './VideoDesc.scss'
import views from '../../assets/svgs/views.svg'
import likes from '../../assets/svgs/likes.svg'
import { formatDate } from '../../scripts/formatDate'

const VideoDesc = ({ videosDetailedData }) => {
    return (
        videosDetailedData ?
        <div className="desc">
            <div className="desc__container">
                <h1 className="desc__title">{videosDetailedData.title}</h1>
                <div className="desc__meta">
                    <div className="desc__meta-left">
                        <h4 className="desc__user">By {videosDetailedData.channel}</h4>
                        <p className="desc__date">{formatDate(videosDetailedData.timestamp)}</p>
                    </div>
                    <div className="desc__meta-right">
                        <p className="desc__views"><img className="desc__icon" src={views} alt="views" />{videosDetailedData.views}</p>
                        <p className="desc__likes"><img className="desc__icon" src={likes} alt="likes" />{videosDetailedData.likes}</p>
                    </div>
                </div>
                <hr className="desc__hr"/>
                <p className="desc__text">{videosDetailedData.description}</p>
            </div>
        </div> : <div className="desc__preloader">Loading</div>
    )
}

export { VideoDesc }