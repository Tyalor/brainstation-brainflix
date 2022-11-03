import './VideoList.scss';
import pic from '../../assets/images/Mohan-muruge.jpg'

const VideoList = () => {
    return (
        <div className="list">
            <div className="list__container">
                <h3 className="list__heading">Next Videos</h3>
                <div className="list__item-container">
                    <div className="list__item">
                        <div className="list__img-container">
                            <img className="list__img" src={pic} alt="" />
                        </div>
                        <div className="list__copy">
                            <h4 className="list__title">Become A Travel Pro In One Easy Lesson</h4>
                            <p className="list__user">Todd Welch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { VideoList }