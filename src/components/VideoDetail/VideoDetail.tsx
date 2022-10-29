import React from 'react';
import styled from '@emotion/styled';
import { VideoEntity, VideosCollection } from '../../App';
import VideoSideList from './VideoSideList';

type VideoDetailProp = {
    video: VideoEntity,
    videos: VideosCollection,
    onVideoSelect: (video: VideoEntity) => void;
}

const breakpoint = [1200];

const mq = breakpoint.map(bp => `@media (max-width: ${bp}px)`);

const Container = styled.div`
    display: flex;
    max-width: 1920px;
    margin: 0px auto;
    padding: 20px;
    ${mq[0]} {
        flex-direction: column;
    }
`

const Left = styled.div`
    flex: 1 1 70%;
`

const Right = styled.div`
    flex: 1 1 30%;
    margin-left: 20px;
    ${mq[0]} {
        margin-left: 0px;
    }
`

const VideoSection = styled.div`
   
`

const VideoOverview = styled.div`
    

`

function VideoDetail({ video, videos, onVideoSelect }: VideoDetailProp) {
    return (
        <Container>
            <Left>
                <VideoSection>
                    <iframe
                        title={video.snippet.channelTitle}
                        width="100%"
                        height="686px"
                        src={`http://www.youtube.com/embed/${video.id}`}
                        allowFullScreen
                    ></iframe>
                </VideoSection>
                <VideoOverview>
                    <h3>{video.snippet.title}</h3>
                    <h4>{video.snippet.channelTitle}</h4>
                    <p>{video.snippet.description}</p>
                </VideoOverview>
            </Left>
            <Right>
                <VideoSideList videos={videos} onVideoSelect={onVideoSelect} />
            </Right>
        </Container>
    )
}

export default VideoDetail