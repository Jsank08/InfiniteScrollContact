import axios from "axios";


export const GET_NEXT_DATA = "GET_NEXT_DATA";
export const REQUEST_NEXT_DATA = "REQUEST_NEXT_DATA";
export const FAILED_NEXT_DATA = "FAILED_NEXT_DATA";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";


export function getNextPage(page) {
  return dispatch => {
    dispatch({
      type: REQUEST_NEXT_DATA,
    })
    return axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=6`)
      .then(res => {
        console.log("data from API", typeof(res.data),res.data);
        return dispatch({
          type: GET_NEXT_DATA,
          payload: res.data
        })
      })

  }
}

export function loggingIn () {
  return dispatch => {
    dispatch({
      type:LOG_IN
    })
  }
}
export function loggingOut () {
  return dispatch => {
    dispatch({
      type:LOG_OUT
    })
  }
}