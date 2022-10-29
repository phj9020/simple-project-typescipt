import { VideoEntity, VideosCollection } from '../../App';
import VideoSideItem from './VideoSideItem';

type VideoListProp = {
    videos: VideosCollection,
    onVideoSelect: (video: VideoEntity) => void
}

function VideoSideList({ videos, onVideoSelect }: VideoListProp) {
    return (
        <div>
            {videos.map(video => <VideoSideItem key={video.id} video={video} onVideoSelect={onVideoSelect} />)}
        </div>
    )
}

export default VideoSideList