const GET_HOME_FEED = 'GET_HOME_FEED';
const ADD_HOME_FEED_IMAGES = 'ADD_HOME_FEED_IMAGES';

export interface PostType {
  url: string;
  id: number;
  thumbnailUrl: string;
  title:string
}

export interface ApiPaylaod {
  limit: number;
  start: number;
}
export {GET_HOME_FEED, ADD_HOME_FEED_IMAGES};
