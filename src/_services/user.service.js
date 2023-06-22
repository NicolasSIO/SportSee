import Axios from "./caller.service";

let getUserMainData = (id) => {
  return Axios.get("user/" + id);
};

export const userMainData = {
  getUserMainData,
};
