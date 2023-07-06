import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:4000",
});

export const getUserMainDataApi = async (id) => {
  try {
    const res = await Axios.get("user/" + id);
    return res.data;
  } catch (e) {
    return null;
  }
};

export const getUserActivityApi = async (userId) => {
  try {
    const res = await Axios.get("user/" + userId + "/activity");
    return res.data;
  } catch (e) {
    return null;
  }
};

export const getUserSessionApi = async (userId) => {
  try {
    const res = await Axios.get("user/" + userId + "/average-sessions");
    return res.data;
  } catch (e) {
    return null;
  }
};

export const getUserPerformanceApi = async (userId) => {
  try {
    const res = await Axios.get("user/" + userId + "/performance");
    return res.data;
  } catch (e) {
    return null;
  }
};
