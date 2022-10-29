import { VideoEntity } from "../App";

interface IYoutube {
    getMostPopular: () => void;
    getSearch: (arg: string) => void;
}

export default class Youtube implements IYoutube {
    key: string;
    constructor(key: string) {
        this.key = key;
        
    }
    getMostPopular() {
        return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=${this.key}`)
            .then(response => response.json())
            .then(result => result.items);
    }
    // VideoEntity의 id 형태가 popular api에서는 string 이지만 search api로 오는 id 는 object인 문제 => id 값을 item.id.videoId 로 덮어줌   
    getSearch(arg: string) {
        return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${arg}&type=video&key=${this.key}`)
            .then(response => response.json())
            .then(result => result.items.map((item: VideoEntity) => ({
                ...item,
                id: item.id.videoId,
            })))
            .then(items => items);
            
    }
};

