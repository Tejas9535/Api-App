import axios from "axios";
import { actionChannel, call, fork, put, take } from "redux-saga/effects";
import { apiType, API_INVOCATION } from "./constants";

const pendingRequests = {};

function* dispatchPanding(actionType, action, payload) {
  yield put({ type: `${actionType}_PENDING`, actualAction: action, payload });
}
function* dispatchSucess(action, response) {
  yield put({
    type: `${action.payload.action}_SUCCESS`,
    actualAction: action,
    payload: { data: response.data },
  });
}

function* dispatchRejected(actionType, action, error) {
  yield put({
    type: `${actionType}_REJECTED`,
    actualAction: action,
    payload: { response: error },
  });
}

const axiosApi = (url, method) => {
  switch (method) {
    case apiType.GET:
      return axios
        .get(url)
        .then((res) => res)
        .catch((error) => error);
    default:
      return "api method not supported";
  }
};

function* invokeApi(action) {
  const { payload } = action;
  const { method, url, action: actionType } = payload;
  try {
    yield* dispatchPanding(payload.action, action, payload);

    const response = yield call(axiosApi, url, method);

    delete pendingRequests[actionType];
    yield* dispatchSucess(action, response);
  } catch (error) {
    delete pendingRequests[actionType];
    yield* dispatchRejected(payload.action, action, error);
  }
}

function* apiSaga() {
  const actionQueue = yield actionChannel(API_INVOCATION);
  const keepWatching = true;
  while (keepWatching) {
    const action = yield take(actionQueue);
    yield fork(invokeApi, action);
  }
}

export { invokeApi };

export default apiSaga;
