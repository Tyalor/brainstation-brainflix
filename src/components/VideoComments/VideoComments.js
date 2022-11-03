import './VideoComments.scss';
import formImg from '../../assets/images/Mohan-muruge.jpg'
import addComment from '../../assets/svgs/add_comment.svg'
import { formatDate } from '../../scripts/formatDate'

const VideoComments = ({ activeVideo }) => {
    
    console.log(activeVideo)

    return (
        <div className="comments">
            <h4 className="comments__counter">{activeVideo.comments.length} Comments</h4>
            <div className="comments__container">
                <div className="comments__form-container">
                    {/* This could be a component for the profile pic */}
                    <div className="comments__img-container">
                        <img className="comments__img" src={formImg} alt="" />
                    </div>
                    
                    <div className="comments__textarea-container">
                        <h3 className="comments__heading">Join the Conversation</h3>
                        <form className="comments__form" action="">
                            <textarea className="comments__textarea" placeholder="Add a new comment" name="" id=""></textarea>
                            <button className="comments__submit-btn btn">
                                <img className="comments__submit-img btn__img" src={addComment} alt="upload" />
                                <p className="comments__submit-text btn__text">Comment</p>
                            </button>
                        </form>
                    </div>

                </div>
            </div>

                {activeVideo.comments.map(e => {
                    return (
                        <div className="comments__posts">
                            <hr className="comments__hr"/>
                            <div className="comments__posts-container">
                                <div className="comments__img-container">
                                    <img className="comments__img" src={null} alt="" />
                                </div>
                                <div className="comments__copy">
                                    <div className="comments__meta">
                                        <p className="comments__user">{e.name}</p>
                                        <h4 className="comments__date">{formatDate(e.timestamp)}</h4>
                                    </div>
                                    <div className="comments__text-container">
                                        <p className="comments__text">{e.comment}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            <hr className="comments__hr"/>
        </div>
    )
}

export { VideoComments }