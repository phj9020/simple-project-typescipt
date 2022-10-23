import React from 'react'
import { VideoEntity } from '../App'

type VideoItemProp = {
    video: VideoEntity
}

// 비디오카드

function VideoItem({ video }: VideoItemProp) {
    return (
        <div>
            <h3>{video.snippet.title}</h3>
        </div>
    )
}

export default VideoItem