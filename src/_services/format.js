import {
  getUserMainDataApi,
  getUserActivityApi,
  getUserPerformanceApi,
  getUserSessionApi,
} from "@/_services/api";

import {
  getUserMainData,
  getUserActivity,
  getUserPerformance,
  getUserSession,
} from "@/_services/mock";

let isApi = false;

export const total = async (id) => {
  if (isApi) {
    let user = await getUserMainDataApi(id);
    let activity = await getUserActivityApi(id);
    let performance = await getUserPerformanceApi(id);
    let session = await getUserSessionApi(id);
    console.log(isApi);
    return {
      user: user,
      activity: activity,
      performance: performance,
      session: session,
    };
  } else {
    let user = await getUserMainData(id);
    let activity = await getUserActivity(id);
    let performance = await getUserPerformance(id);
    let session = await getUserSession(id);
    console.log(isApi);
    return {
      user: user,
      activity: activity,
      performance: performance,
      session: session,
    };
  }
};
