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
export { handleLoginApi, getUsers, handleCreateUser, deleteUser, getAllCode, getMember }
