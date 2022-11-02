import './VideoComments.scss';
import formImg from '../../assets/images/Mohan-muruge.jpg'
import addComment from '../../assets/svgs/add_comment.svg'

const VideoComments = () => {
    return (
        <div className="comments">
            <h4 className="comments__counter">3 Comments</h4>
            <div className="comments__container">
                <div className="comments__form-container">
                    {/* This could be a component for the profile pic */}
                    <div className="comments__img-container">
                        <img className="comments__img" src={formImg} alt="" />
                    </div>
                    <div>
                        <h3 className="comments__heading">Join the Conversation</h3>
                        <form className="comments__form" action="">
                            <textarea className="comments__textarea" placeholder="Add a new comment" name="" id="" cols="30"></textarea>
                            <button className="comments__submit-btn btn">
                                <img className="comments__submit-img btn__img" src={addComment} alt="upload" />
                                <p className="comments__submit-text btn__text">Comment</p>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="comments__posts">

                </div>
            </div>
        </div>
    )
}

export default VideoComments