import axios from "axios";

export const getUsers = function() {
  return axios.get("https://randomuser.me/api/?results=150&nat=us");
};
