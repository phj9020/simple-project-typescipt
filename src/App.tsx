import React, { useEffect } from 'react';
import Header from './components/Header';
import VideoDetail from './components/VideoDetail/VideoDetail';
import VideoList from './components/VideoList';
import Youtube from './service/youtube';



export type VideoEntity = {
  etag: string,
  id: string & { kind: string, videoId: string },
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

type AppProps = {
  youtube: Youtube;
}

function App({ youtube }: AppProps) {
  const [videos, setVideos] = React.useState<VideosCollection>([]);
  const [selected, setSelected] = React.useState(null);
  console.log(selected)
  const selectVideo = (video: any) => {
    setSelected(video);
  }

  useEffect(() => {
    // youtube.getMostPopular().then(items => setVideos(items))
    async function getPopular() {
      const popularVideos = await youtube.getMostPopular();
      setVideos(popularVideos);
    };
    getPopular();
  }, [youtube]);


  const onSearch = (arg: string) => {
    youtube.getSearch(arg).then(items => setVideos(items));
  }


  return (
    <div>
      <Header onSearch={onSearch} />
      {selected ?
          <VideoDetail video={selected} videos={videos} onVideoSelect={selectVideo} />
        :
        <VideoList videos={videos} onVideoSelect={selectVideo} />
      }

    </div>
  );
}

export default App;
