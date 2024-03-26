import { getData } from "../../services/api/getData";

import {
    GET_JOKES_REQUEST,
    GET_JOKES_FAILED,
    GET_JOKES_SUCCESS
} from "./searchTypes"

export function getJokes(searchInput) {
    return function (dispatch) {
      dispatch({
        type: GET_JOKES_REQUEST
      })
      getData(searchInput).then(res => {
        if (res && res.data) {
          dispatch({
            type: GET_JOKES_SUCCESS,
            jokes: res.data
          });
        } else {
          dispatch({
            type: GET_JOKES_FAILED
          });
        }
      })
        .catch((err) => console.log(err))
    };
  }