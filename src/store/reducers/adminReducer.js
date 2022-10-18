import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    status: [],
    members: [],
    tourInfo: null,
    tours: [],
    Alltour: [],
    memorableTours: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionTypes.ADMIN_LOGIN_SUCCESS:
        //     return {
        //         ...state,
        //         isLoggedIn: true,
        //         adminInfo: action.adminInfo
        //     }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState = { ...state }
            copyState.genders = action.data;
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_FAIL:
            state.genders = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            // console.log("check data from redux", action.data)
            state.roles = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAIL:
            state.roles = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_MEMBER_SUCCESS:
            // memberCopy = state.members
            let copyStateMember = { ...state }
            // console.log("check data", action.data)
            copyStateMember.members = action.data;
            return {
                ...copyStateMember,
            }
        case actionTypes.FETCH_MEMBER_FAIL:
            state.members = [];
            return {
                ...state,
            }
        case actionTypes.CREATE_TOUR_SUCCESS:
            // memberCopy = state.members
            console.log("check tourInfo: ", action.tourInfo)
            return {
                ...state,
                tourInfor: action.tourInfor
            }
        case actionTypes.CREATE_TOUR_FAIL:
            return {
                ...state,
                tourInfo: null,
            }
        case actionTypes.FETCH_TOUR_SUCCESS:
            // memberCopy = state.members
            state.tours = action.data
            // console.log("check data", action.data)
            return {
                ...state
            }
        case actionTypes.FETCH_TOUR_FAIL:
            // memberCopy = state.members
            state.tours = []
            // console.log("check data", action.data)
            return {
                ...state
            }
        case actionTypes.FETCH_AllTOUR_SUCCESS:
            // memberCopy = state.members
            state.Alltour = action.data
            // console.log("check data", action.data)
            return {
                ...state
            }
        case actionTypes.FETCH_AllTOUR_FAIL:
            // memberCopy = state.members
            state.Alltour = []
            // console.log("check data", action.data)
            return {
                ...state
            }
        case actionTypes.FETCH_MTOUR_SUCCESS:
            // memberCopy = state.members
            state.memorableTours = action.data
            // console.log("check data", action.data)
            return {
                ...state
            }
        case actionTypes.FETCH_MTOUR_FAIL:
            // memberCopy = state.members
            state.memorableTours = []
            // console.log("check data", action.data)
            return {
                ...state
            }
        default:
            return state;
    }
}


export default adminReducer;