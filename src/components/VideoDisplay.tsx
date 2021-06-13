import { Videos } from '../Types/TypesList';

function VideoDisplay(video: any) {

    console.log(`http://www.youtube.com/watch?v=${video.video.id.videoId}`)

    return (
        <>
            <h2>{video.video.snippet.title}</h2>
            <iframe className="myVideo"
                title="myVideo"
                src={`http://www.youtube.com/embed/${video.video.id.videoId}`} />
        </>
    )
}
export default VideoDisplay