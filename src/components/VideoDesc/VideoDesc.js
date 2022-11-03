import './VideoDesc.scss'
import views from '../../assets/svgs/views.svg'
import likes from '../../assets/svgs/likes.svg'

const VideoDesc = ({ activeVideo }) => {
    return (
        activeVideo ?
        <div className="desc">
            <h1 className="desc__title">{activeVideo.title}</h1>
            <div className="desc__meta">
                <div className="desc__meta-left">
                    <h4 className="desc__user">By {activeVideo.channel}</h4>
                    <p className="desc__date">{activeVideo.timestamp}</p>
                </div>
                <div className="desc__meta-right">
                    <p className="desc__views"><img className="desc__icon" src={views} alt="views" />{activeVideo.views}</p>
                    <p className="desc__likes"><img className="desc__icon" src={likes} alt="likes" />{activeVideo.likes}</p>
                </div>
            </div>
            <hr className="desc__hr"/>
            <p className="desc__text">{activeVideo.description}</p>
        </div> : <div className="desc__preloader">Loading</div>
    )
}

export { VideoDesc }