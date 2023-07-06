import Axios from "./caller.service";

let getUserPerformance = (userId) => {
  return Axios.get("user/" + userId + "/performance");
};

export const userPerformance = {
  getUserPerformance,
};
