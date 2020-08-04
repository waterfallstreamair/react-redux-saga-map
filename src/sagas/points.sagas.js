import { all, call, put, takeEvery, select } from "redux-saga/effects";
import api from "../api";

import {
  actions as pointsActions,
  getPointsSuccess,
  getPointsFailure,
} from "../actions/points.actions";

function* getPointsSaga(action) {
  const { lat, lng, addressPoints } = action.options;
  const selected = yield select((state) => state.pointsReducer);
  const { points, addresses, point } = selected;
  try {
    if (lat && lng) {
      const res = yield call(api.getAddress, lat, lng);
      yield put(
        getPointsSuccess({
          addresses: { ...addresses, [point]: res },
          points: { ...points, [point]: { lat, lng } },
          point,
        })
      );
    }
    if (addressPoints) {
      const point1 = yield call(api.getLatLng, addressPoints.point1);
      const point2 = yield call(api.getLatLng, addressPoints.point2);
      if (point1 && point2) {
        yield put(
          getPointsSuccess({
            addresses: {
              point1: addressPoints.point1,
              point2: addressPoints.point2,
            },
            points: { point1, point2 },
            point,
          })
        );
      }
    }
  } catch (error) {
    console.log({ error });
    yield put(getPointsFailure(error));
  }
}

export default function* usersSagas() {
  yield all([takeEvery(pointsActions.POINTS.GET, getPointsSaga)]);
}
