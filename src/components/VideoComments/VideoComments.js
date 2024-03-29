import './VideoComments.scss';
import formImg from '../../assets/images/Mohan-muruge.jpg'
import addComment from '../../assets/svgs/add_comment.svg'
import { formatDateRelative } from '../../scripts/formatDate'

const VideoComments = ({ videosDetailedData }) => {

    return (
        <div key={videosDetailedData.id} className="comments">
            <div className='comments__container'>
                <h4 className="comments__counter">{videosDetailedData.comments?.length} Comments</h4>
                <div className="comments__sub-container">
                    <div className="comments__form-container">
                        <div className="comments__img-container">
                            <img className="comments__img" src={formImg} alt="comment" />
                        </div>
                        
                        <div className="comments__textarea-container">
                            <h3 className="comments__heading">Join the Conversation</h3>
                            <form className="comments__form" action="">
                                <textarea className="comments__textarea" placeholder="Add a new comment" name="comment" id=""></textarea>
                                {/* <button className="comments__submit-btn btn" onClick={() => clickHandler()}> */}
                                <button className="comments__submit-btn btn">
                                    <img className="comments__submit-img btn__img" src={addComment} alt="comment" />
                                    <p className="comments__submit-text btn__text">Comment</p>
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
                    {videosDetailedData.comments?.map(e => {
                        return (
                            <div key={e.id} className="comments__posts">
                                <hr className="comments__hr"/>
                                <div className="comments__posts-container">
                                    <div className="comments__img-container">
                                        <img className="comments__img" src={null} alt="comment" />
                                    </div>
                                    <div className="comments__copy">
                                        <div className="comments__meta">
                                            <p className="comments__user">{e.name}</p>
                                            <h4 className="comments__date">{formatDateRelative(e.timestamp)}</h4>
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
        </div>
    )
}

export { VideoComments }