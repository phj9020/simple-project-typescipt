import React, { useEffect } from 'react';
import Header from './components/Header';
import VideoList from './components/VideoList';


export type VideoEntity = {
  etag: string,
  id: string,
  kind: string,
  snippet: {
    categoryId: string,
    channelId: string,
    channelTitle: string,
    description: string,
    liveBroadcastContent: string,
    localized: {
      title: string,
      description: string,
    },
    publishedAt: string,
    tags: Array<string>,
    thumbnails: {
      default: {
        url: string,
        width: number,
        height: number,
      },
      high: {
        url: string,
        width: number,
        height: number,
      }
      maxres: {
        url: string,
        width: number,
        height: number,
      },
      medium: {
        url: string,
        width: number,
        height: number,
      },
    },
    title: string,
  }
};

export type VideosCollection = Array<VideoEntity>;

function App() {
  const [videos, setVideos] = React.useState<VideosCollection>([]);

  useEffect(() => {
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyBHlVhXIi8VCGP3NlsURBWOwPZGkvKsJPI", {
        method: 'GET',
        redirect: 'follow'
      })
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
    
  }, []);


  return (
    <div>
      <Header />
      <VideoList videos={ videos } />
    </div>
  );
}

export default App;
