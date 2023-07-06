import Axios from "./caller.service";

let getUserSession = (userId) => {
  return Axios.get("user/" + userId + "/average-sessions");
};

export const userSession = {
  getUserSession,
};
