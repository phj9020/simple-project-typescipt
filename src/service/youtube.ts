import { VideoEntity } from "../App";
import { AxiosInstance } from "axios";
interface IYoutube {
    getMostPopular: () => void;
    getSearch: (arg: string) => void;
}

export default class Youtube implements IYoutube {
    youtube: AxiosInstance;
    constructor(httpClient: AxiosInstance) {
        this.youtube = httpClient;
    }
    async getMostPopular() {
        try {
            const response = await this.youtube.get('videos', {
                params: {
                    part: 'snippet',
                    chart: 'mostPopular',
                    maxResults: 50,
                }
            });
            return response.data.items;
        
        } catch (error) {
            console.log(error)
        }
    }

    // VideoEntity의 id 형태가 popular api에서는 string 이지만 search api로 오는 id 는 object인 문제 => id 값을 item.id.videoId 로 덮어줌   
    async getSearch(arg: string) {
        try {
            const response = await this.youtube.get('search', {
                params: {
                    part: 'snippet',
                    type: 'video',
                    maxResults: 50,
                    q: arg
                }
            });
            const items = response.data.items.map((item: VideoEntity) => ({
                ...item,
                id: item.id.videoId,
            }));
            return items;
        } catch (error) {
            console.log(error);
        }
    }
};

