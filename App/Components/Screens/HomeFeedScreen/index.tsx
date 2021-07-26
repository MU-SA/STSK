import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {getHomeFeed} from '../../../Actions/HomeFeedActions';
import {PostType} from '../../../Types/HomeFeedActionTypes';
import {HomeFeedScreen} from './Component';

type StoreState = {
  HomeFeed: {
    home_feed: PostType[];
  };
};
type SelectorProps = {
  home_feed: PostType[];
};
const selector = createStructuredSelector<StoreState, SelectorProps>({
  home_feed: (state: StoreState) => state.HomeFeed.home_feed,
});
const actions = {
  getData: getHomeFeed,
};
export default connect(selector, actions)(HomeFeedScreen);
