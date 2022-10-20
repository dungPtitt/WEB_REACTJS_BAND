const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //admin
    ADMIN_LOGIN_SUCCESS: 'ADMIN_LOGIN_SUCCESS',
    ADMIN_LOGIN_FAIL: 'ADMIN_LOGIN_FAIL',

    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAIL: 'FETCH_GENDER_FAIL',

    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAIL: 'FETCH_ROLE_FAIL',

    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAIL: 'CREATE_USER_FAIL',
    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',

    FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
    FETCH_USER_FAIL: 'FETCH_USER_FAIL',
    // EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
    // EDIT_USER_FAIL: 'EDIT_USER_FAIL',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',
    //member
    FETCH_MEMBER_SUCCESS: 'FETCH_MEMBER_SUCCESS',
    FETCH_MEMBER_FAIL: 'FETCH_MEMBER_FAIL',
    //tour
    CREATE_TOUR_SUCCESS: 'CREATE_TOUR_SUCCESS',
    CREATE_TOUR_FAIL: 'CREATE_TOUR_FAIL',
    EDIT_TOUR_SUCCESS: 'EDIT_TOUR_SUCCESS',
    EDIT_TOUR_FAIL: 'EDIT_TOUR_FAIL',
    FETCH_AllTOUR_SUCCESS: 'FETCH_AllTOUR_SUCCESS',
    FETCH_AllTOUR_SUCCESS: 'FETCH_AllTOUR_FAIL',
    FETCH_TOUR_SUCCESS: 'FETCH_TOUR_SUCCESS',
    FETCH_TOUR_FAIL: 'FETCH_TOUR_FAIL',
    FETCH_MTOUR_SUCCESS: 'FETCH_MTOUR_SUCCESS',
    FETCH_MTOUR_FAIL: 'FETCH_MTOUR_FAIL,'
})

export default actionTypes;