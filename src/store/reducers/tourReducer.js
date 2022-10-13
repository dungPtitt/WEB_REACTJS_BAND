import actionTypes from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  tourInfo: null
}

const tourReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_TOUR_SUCCESS:
      return {
        ...state,
        tourInfo: action.tourInfo
      }
    case actionTypes._CREATE_TOUR_FAIL:
      return {
        ...state,
        userInfo: null
      }
    default:
      return state;
  }
}

export default tourReducer;