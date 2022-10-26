import React, { useEffect } from 'react';
import Header from './components/Header';
import VideoList from './components/VideoList';


export type VideoEntity = {
  etag: string,
  id: string & {kind: string, videoId: string},
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
    
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=${process.env.REACT_APP_KEY}`, {
        method: 'GET',
        redirect: 'follow'
      })
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
    
  }, []);

 

// VideoEntity의 id 형태가 popular api에서는 string 이지만 search api로 오는 id 는 object인 문제 => id 값을 item.id.videoId 로 덮어줌   
  const onSearch = (arg: string) => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${arg}&type=video&key=${process.env.REACT_APP_KEY}`, {
                method: 'GET',
                redirect: 'follow'
            })
      .then(response => response.json())
      .then(result => result.items.map((item: VideoEntity) => ({
        ...item,
        id: item.id.videoId,
      })))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }


  return (
    <div>
      <Header onSearch={onSearch} />
      <VideoList videos={ videos } />
    </div>
  );
}

export default App;
