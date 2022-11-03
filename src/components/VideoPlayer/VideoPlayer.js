import './VideoPlayer.scss';

const VideoPlayer = ({ activeVideo }) => {
    return (
        <div className="player">
            <div className="player__container">
                <video className="player__video" controls src="" poster={activeVideo.image}></video>
            </div>
        </div>
    )
}

export { VideoPlayer }