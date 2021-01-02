
import { takeLatest, call, put } from '@redux-saga/core/effects'
import { apiResource } from '../../utils/api';
import { updateResults } from "./actions";

function* getData (ob: any) {
	const { payload } = ob;
	
  	try {
		const url = `/search`;
		const res = yield call(apiResource.post, url, payload);
		console.log(res);
    if (res && res.data) {
      	yield put(
			updateResults({
				data: res.data?.items,
				type: payload.type,
				search: payload.search
			})
		);
	} 
  } catch(e) {

	}
}
export default function* homeSaga() {
    yield takeLatest("GET_DATA", getData);
}