import Axios from "./caller.service";

let getUserActivity = (userId) => {
  return Axios.get("user/" + userId + "/activity");
};

export const userActivity = {
  getUserActivity,
};
