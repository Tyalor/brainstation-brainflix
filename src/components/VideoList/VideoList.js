import './VideoList.scss';
import pic from '../../assets/images/Mohan-muruge.jpg'

const VideoList = (props) => {

    let videosData = props.videosData

    return (
        <div className="list">
            <div className="list__container">
                <h3 className="list__heading">Next Videos</h3>
                <div className="list__item-container">
                {

                    videosData.map(e => {
                        return (
                        <div className="list__item" key={e.id}>
                            <div className="list__img-container">
                                <img className="list__img" src={e.image} alt="" />
                            </div>
                            <div className="list__copy">
                                <h4 className="list__title">{e.title}</h4>
                                <p className="list__user">{e.channel}</p>
                            </div>
                        </div>
                        )
                    })
                }
                    
                </div>
            </div>
        </div>
    )
}

export { VideoList }