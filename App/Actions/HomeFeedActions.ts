import {
  GET_HOME_FEED,
  ADD_HOME_FEED_IMAGES,
  ApiPaylaod,
  PostType,
} from '../Types/HomeFeedActionTypes';

export function getHomeFeed(payload: ApiPaylaod) {
  return {
    type: GET_HOME_FEED,
    payload,
  };
}

export function setHomeFeed(payload: PostType[]) {
  return {
    type: ADD_HOME_FEED_IMAGES,
    payload,
  };
}
