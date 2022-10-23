import React from 'react'
import {  VideosCollection } from '../App';
import VideoItem from './VideoItem';



type VideoListProps = {
    videos: VideosCollection
}

function VideoList({ videos }: VideoListProps) {
    console.log(videos )
    return (
        <ul>
            {videos.map(video => <VideoItem key={video.id} video={video} />)}
        </ul>
    )
}

export default VideoList