import { getDistance } from "geolib";

export const actions = {
  POINTS: {
    GET: "POINTS_GET",
    SUCCESS: "POINTS_SUCCESS",
    FAILURE: "POINTS_FAILURE",
  },
};

export const getPoints = (options) => ({
  type: actions.POINTS.GET,
  options,
});

const distance = (point1, point2) => {
  if (point1 && point2) {
    return getDistance(point1, point2);
  }
  return "";
};

export const getPointsSuccess = (options) => {
  const { addresses, points, point } = options;
  const { point1, point2 } = points;
  const distanceInMeters = distance(point1, point2);
  return {
    type: actions.POINTS.SUCCESS,
    addresses,
    points,
    distance: distanceInMeters,
    point: point === "point1" ? "point2" : "point1",
  };
};

export const getPointsFailure = (error) => ({
  type: actions.POINTS.FAILURE,
  error,
});
