import axios from "../axios";

let handleCreateTour = (data) => {
  // console.log("check data from api", data)
  return axios.post('api/create-tour', data);
}

export { handleCreateTour }