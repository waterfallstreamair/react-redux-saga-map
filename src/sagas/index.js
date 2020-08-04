import { all, spawn } from "redux-saga/effects";

import pointsSagas from "./points.sagas";

export default function* rootSaga() {
  yield all([spawn(pointsSagas)]);
}
