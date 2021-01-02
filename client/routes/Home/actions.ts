/*
 * Home Actions
 *
 */

import { SearchData, ApiData } from "./interface"

export function getGitData(obj: SearchData) {

  return {
    type: "GET_DATA",
    payload: {
      ...obj,
    },
  };
}

export const updateResults = (obj: ApiData) => {
  return {
    type: "UPDATE_RESULTS",
    payload: {
      ...obj,
    },
  };
};


export const getDataFromStore = (obj: SearchData) => {
  return {
    type: "GET_DATA_FROM_STORE",
    payload: {
      ...obj,
    },
  };
}