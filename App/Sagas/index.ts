import {all, takeLatest} from 'redux-saga/effects';
import {getHomeFeed} from '../Sagas/HomeFeedSaga';
import {GET_HOME_FEED} from '../Types/HomeFeedActionTypes';
export default function* watch() {
  console.log()
  yield all([takeLatest(GET_HOME_FEED, getHomeFeed)]);
}
