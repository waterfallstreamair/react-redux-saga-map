import { actions as pointsActions } from "../actions/points.actions";

const initialState = {
  points: {
    point1: null,
    point2: null,
  },
  addresses: {
    point1: "",
    point2: "",
  },
  point: "point1",
  distance: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case pointsActions.POINTS.SUCCESS:
      return {
        ...state,
        points: action.points,
        addresses: action.addresses,
        distance: action.distance,
        point: action.point,
      };
    default:
      return state;
  }
};

export default rootReducer;
