import {ADD_HOME_FEED_IMAGES, PostType} from '../Types/HomeFeedActionTypes';
type Action = {
  payload: PostType[];
  type: string;
};
type StoreState = {
  home_feed: PostType[];
};
const initialState = {
  home_feed: [],
};

export default function (state = initialState, action: Action): StoreState {
  switch (action.type) {
    case ADD_HOME_FEED_IMAGES: {
      const home_feed = [...state.home_feed, ...action.payload];
      return {...state, home_feed};
    }
    default: {
      return state;
    }
  }
}
