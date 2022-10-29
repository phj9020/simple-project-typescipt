import styled from '@emotion/styled'
import React from 'react'
import { VideoEntity } from '../../App'

type VideoSideItemProp = {
    video: VideoEntity,
    onVideoSelect: (video : VideoEntity) => void;
}

const VideoSideContainer = styled.div`
    display: flex;
    &:hover {
        cursor: pointer;
    }
`

const ThumnnailContainer = styled.div`
    img {
        &:hover {
            opacity: 80%;
        }
    }
`

const TextContainer = styled.div`
    margin-left: 5px;
    h4 {
        margin-top:0px;
    }
`

function VideoSideItem({ video, onVideoSelect }: VideoSideItemProp) {
    return (
        <VideoSideContainer onClick={() => onVideoSelect(video)}>
            <ThumnnailContainer>
                <img src={video.snippet.thumbnails.medium.url} alt={ video.snippet.title } />
            </ThumnnailContainer>
            <TextContainer>
                <h4>{video.snippet.title}</h4>
                <p>{ video.snippet.channelTitle }</p>
            </TextContainer>
        </VideoSideContainer>
    )
}

export default VideoSideItem