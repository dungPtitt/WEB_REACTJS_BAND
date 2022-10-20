import { getAllCode, handleCreateUser, getMember, getTour, getMemorableTour, getAllTour } from '../../services/userService';
import { handleCreateTour, handleEditTour } from '../../services/tourService';
import { getUsers } from '../../services/userService'
import actionTypes from './actionTypes';

export const fetchGenderStart = () => {
    return async (dispatch, setState) => {
        try {
            let res = await getAllCode("GENDER")
            if (res && res.data) {
                dispatch(fetchGenderSuccess(res.data));
            }
            else {
                dispatch(fetchGenderFail())
            }
        } catch (e) {
            dispatch(fetchGenderFail())
            console.log("fetchGenderFail err", e)
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFail = () => ({
    type: actionTypes.FETCH_GENDER_FAIL
})

export const fetchRoleStart = () => {
    return async (dispatch, setState) => {
        try {
            let res = await getAllCode("ROLE")
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFail())
            }
        } catch (e) {
            dispatch(fetchRoleFail())
            console.log("fetchRoleFail err", e)
        }
    }
}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFail = () => ({
    type: actionTypes.FETCH_ROLE_FAIL,
})
// npx sequelize-cli db:migrate  --to migration-create-user.js
export const createUserStart = (data) => {
    return async (dispatch, setState) => {
        try {
            let res = await handleCreateUser(data);
            console.log("check response", res)
            if (res && res.errCode === 0) {
                dispatch(createUserSuccess());
            } else {
                dispatch(createUserFail());
            }
        } catch (e) {
            dispatch(createUserFail())
            console.log('Err create user: ', e)
        }
    }
}

export const createUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const createUserFail = () => ({
    type: actionTypes.CREATE_USER_FAIL
})



export const fetchMemberSuccess = (members) => ({
    type: actionTypes.FETCH_MEMBER_SUCCESS,
    data: members
})

export const fetchMemberFail = () => ({
    type: actionTypes.FETCH_MEMBER_FAIL
})

export const fetchMemberStart = (id) => {
    return async (dispatch, setState) => {
        try {
            let res = await getMember(id)
            if (res && res.errCode === 0) {
                // console.log("check member: ", res.member)
                dispatch(fetchMemberSuccess(res.data));
            }
            else {
                dispatch(fetchMemberFail())
            }
        } catch (e) {
            dispatch(fetchMemberFail())
            console.log("fetchMemberFail err", e)
        }
    }
}

export const fetchUserStart = (id) => {
    return async (dispatch, setState) => {
        try {
            let res = await getUsers(id)
            console.log("check users from redux: ", res)
            if (res && res.errCode === 0) {
                // console.log("check User: ", res.User)
                dispatch(fetchUserSuccess(res.user));
            }
            else {
                dispatch(fetchUserFail())
            }
        } catch (e) {
            dispatch(fetchUserFail())
            console.log("fetchUserFail err", e)
        }
    }
}
export const fetchUserSuccess = (user) => ({
    type: actionTypes.FETCH_USER_SUCCESS,
    data: user
})

export const fetchUserFail = () => ({
    type: actionTypes.FETCH_USER_FAIL
})

export const createTourStart = (data) => {
    return async (dispatch, setState) => {
        try {
            console.log("check data redux:", data)
            let res = await handleCreateTour(data);
            console.log("check response", res)
            if (res && res.errCode === 0) {
                dispatch(createTourSuccess(res.data));
            } else {
                dispatch(createTourFail());
            }
        } catch (e) {
            dispatch(createTourFail())
            console.log('Err create Tour: ', e)
        }
    }
}

export const createTourSuccess = (dataInput) => ({
    type: actionTypes.CREATE_TOUR_SUCCESS,
    tourInfo: dataInput
})

export const createTourFail = () => ({
    type: actionTypes.CREATE_TOUR_FAIL
})

export const editTourStart = (data) => {
    return async (dispatch, setState) => {
        try {
            let res = await handleEditTour(data);
            console.log("check response", res)
            if (res && res.errCode === 0) {
                dispatch(fetchAllTourStart())
                dispatch(editTourSuccess());
            } else {
                dispatch(editTourFail());
            }
        } catch (e) {
            dispatch(editTourFail())
            console.log('Err edit Tour: ', e)
        }
    }
}

export const editTourSuccess = () => ({
    type: actionTypes.EDIT_TOUR_SUCCESS,
})

export const editTourFail = () => ({
    type: actionTypes.EDIT_TOUR_FAIL
})


export const fetchTourStart = (limitInput) => {
    return async (dispatch, setState) => {
        try {
            if (!limitInput) limitInput = 3;
            console.log("check limit: ", limitInput)
            let res = await getTour(limitInput)
            if (res && res.errCode === 0) {
                // console.log("check member: ", res.member)
                dispatch(fetchTourSuccess(res.tours));
            }
            else {
                dispatch(fetchTourFail())
            }
        } catch (e) {
            dispatch(fetchTourFail())
            console.log("fetchTourFail err", e)
        }
    }
}

export const fetchTourSuccess = (tours) => ({
    type: actionTypes.FETCH_TOUR_SUCCESS,
    data: tours
})

export const fetchTourFail = () => ({
    type: actionTypes.FETCH_TOUR_FAIL
})
// fetchAllTourStart
export const fetchAllTourStart = () => {
    return async (dispatch, setState) => {
        try {
            let res = await getAllTour()
            if (res && res.errCode === 0) {
                // console.log("check member: ", res.member)
                dispatch(fetchAllTourSuccess(res.tours));
            }
            else {
                dispatch(fetchAllTourFail())
            }
        } catch (e) {
            dispatch(fetchAllTourFail())
            console.log("fetchAllTourFail err", e)
        }
    }
}

export const fetchAllTourSuccess = (tours) => ({
    type: actionTypes.FETCH_AllTOUR_SUCCESS,
    data: tours
})
export const fetchAllTourFail = () => ({
    type: actionTypes.FETCH_AllTOUR_FAIL,
})
export const fetchMemorableTourStart = (limitInput) => {
    return async (dispatch, setState) => {
        try {
            let res = await getMemorableTour(limitInput)
            if (res && res.errCode === 0) {
                // console.log("check member: ", res.member)
                dispatch(fetchMemorableTourSuccess(res.tours));
            }
            else {
                dispatch(fetchMemorableTourFail())
            }
        } catch (e) {
            dispatch(fetchMemorableTourFail())
            console.log("fetchMemorableTourFail err", e)
        }
    }
}

export const fetchMemorableTourSuccess = (tours) => ({
    type: actionTypes.FETCH_MTOUR_SUCCESS,
    data: tours
})

export const fetchMemorableTourFail = () => ({
    type: actionTypes.FETCH_MTOUR_FAIL
})