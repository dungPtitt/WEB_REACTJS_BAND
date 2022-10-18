import axios from "../axios";

let handleLoginApi = (email, password) => {
  return axios.post('api/login', { email, password });
}

let getUsers = (id) => {
  return axios.get(`api/get-user?id=${id}`);
}

let handleCreateUser = (data) => {
  // console.log("check data from api", data)
  return axios.post('api/create-user', data);
}

let deleteUser = (userId) => {
  return axios({
    method: 'DELETE',
    url: 'api/delete-user',
    data: { id: userId },
  });
}

let getAllCode = (inputType) => {
  return axios.get(`/api/get-allcode?type=${inputType}`);
}

let getMember = (inputLimit) => {
  return axios.get(`api/get-member?limit=${inputLimit}`);
}

let getTour = (inputLimit) => {
  return axios.get(`api/get-tour?limit=${inputLimit}`);
}
let getAllTour = () => {
  return axios.get('api/get-all-tour');
}

let getMemorableTour = (inputLimit) => {
  return axios.get(`api/get-memorable-tour?limit=${inputLimit}`);
}

let deleteTour = (tourId) => {
  return axios({
    method: 'DELETE',
    url: 'api/delete-tour',
    data: { id: tourId },
  });
}

let postVerifyBooking = (data) => {
  return axios.post('api/verify-booking-ticket', data);
}
export { handleLoginApi, getUsers, handleCreateUser, deleteUser, getAllCode, getMember, getTour, getAllTour, deleteTour, postVerifyBooking, getMemorableTour }
