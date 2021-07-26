import {call, put} from 'redux-saga/effects';
import {setHomeFeed} from '../Actions/HomeFeedActions';
import Fetch from '../Services/Fetch';
import {ApiPaylaod} from '../Types/HomeFeedActionTypes';

export function* getHomeFeed(props: {payload: ApiPaylaod; type: string}) {
  try {
    const response = yield call(
      Fetch,
      `/photos?_start=${props.payload.start}&_limit=${props.payload.limit}`,
    );
    yield put(setHomeFeed(response.data));
  } catch (error) {
    console.log(error);
  }
}
