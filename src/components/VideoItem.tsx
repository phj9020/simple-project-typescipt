import styled from '@emotion/styled';
import { VideoEntity } from '../App';

const Thumbnail = styled.li`
    box-sizing:border-box;
    list-style-type: none;
    transition: 0.3s ease-in transform;
    padding: 4px;
    &:hover {
        cursor: pointer;
        background-color: #443f3f10;
        transform: scale(1.05);
        box-shadow: 5px 7px 107px 0px rgba(0,0,0,0.12);
        -webkit-box-shadow: 5px 7px 107px 0px rgba(0,0,0,0.12);
    }
`

const ImageThumbnail = styled.img`
    width:100%;
    &:hover {
        opacity: 80%;
        
    }
`

const TextThumbnail = styled.div`
    color: black;
    font-family: "Roboto","Arial",sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    h3 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        text-overflow: ellipsis;
        overflow: hidden;
    }
    p {
        font-size: 1rem;
        color: #606060;
    }
`

type VideoItemProp = {
    video: VideoEntity
}

// 비디오카드

function VideoItem({ video }: VideoItemProp) {
    const { snippet: { thumbnails, title, channelTitle } } = video;
    
    return (
        <Thumbnail>
            <ImageThumbnail src={thumbnails.medium.url} alt="thumbnail" />
            <TextThumbnail>
                <h3>{title}</h3>
                <p>{channelTitle}</p>
            </TextThumbnail>
        </Thumbnail>
    )
}

export default VideoItem