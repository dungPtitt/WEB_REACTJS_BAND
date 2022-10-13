import { getAllCode, handleCreateUser, getMember } from '../../services/userService';
import { handleCreateTour } from '../../services/tourService';
import actionTypes from './actionTypes';

export const fetchGenderStart = () => {
    return async (dispatch, setState) => {
        try {
            let res = await getAllCode("gender")
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

export const fetchMemberStart = () => {
    return async (dispatch, setState) => {
        try {
            let res = await getMember(3)
            if (res && res.errCode === 0) {
                // console.log("check member: ", res.member)
                dispatch(fetchMemberSuccess(res.member));
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
