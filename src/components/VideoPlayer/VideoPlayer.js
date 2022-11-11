import './VideoPlayer.scss';

const VideoPlayer = ({ videosDetailedData }) => {
    return (
        <div className="player">
            <div className="player__container">
                <video className="player__video" controls src="" poster={videosDetailedData.image}></video>
            </div>
        </div>
    )
}

export { VideoPlayer }