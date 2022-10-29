import styled from '@emotion/styled'
import { VideoEntity, VideosCollection } from '../App';
import VideoItem from './VideoItem';

const breakpoints = [700, 1200, 1500, 1920];

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);


const Container = styled.div`
    width: 100%;
    max-width: 1920px;
    margin: 0px auto;
    padding: 0px 0px;
`

const ListBox = styled.ul`
    display: grid;
    grid-gap: 40px;
    padding: 0px;
    
    ${mq[0]} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${mq[1]} {
        grid-template-columns: repeat(4, 1fr);
    }
    ${mq[2]} {
        grid-template-columns: repeat(5, 1fr);
        }
    ${mq[3]} {
        grid-template-columns: repeat(6, 1fr);
    }
`


type VideoListProps = {
    videos: VideosCollection,
    onVideoSelect: (video: VideoEntity) => void,
}

function VideoList({ videos, onVideoSelect }: VideoListProps) {

    return (
        <Container>
            <ListBox>
                {videos.map(video => <VideoItem key={video.id} video={video} onVideoSelect={onVideoSelect}  />)}
            </ListBox>
        </Container>
    )
}

export default VideoList