import axios from "../axios";

let handleCreateTour = (data) => {
  // console.log("check data from api", data)
  return axios.post('api/create-tour', data);
}

let handleEditTour = (data) => {
  return axios.post('api/edit-tour', data);
}
let handleBookingTicket = (data) => {
  return axios.post('api/audience-booking-ticket', data)
}

export { handleCreateTour, handleBookingTicket, handleEditTour }