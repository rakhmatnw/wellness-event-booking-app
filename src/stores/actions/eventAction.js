import Axios from "axios";
import {url} from './../../helpers/url';
import {showAlert} from './modalAction';

export const getEvents = (token, id) => dispatch => {
  dispatch({type: 'GET_EVENTS_REQUEST'})
  return Axios({
    method: 'GET',
    url: `${url}/v1/api/vendor/event`,
    headers: {
      auth: token
    }
  })
  .then(res => {
    dispatch({
      type: 'GET_EVENTS_SUCCESS',
      events: res.data.data
    })
  })
  .catch(err => {
    dispatch({
      type: 'GET_EVENTS_FAILED',
      message: err.response ? err.response.data.message : err.message
    })

    dispatch(showAlert())
  })
}

export const getNormalizedEvents = (token) => dispatch => {
  dispatch({type: 'GET_NORMALIZED_EVENTS_REQUEST'})

  return Axios({
    method: 'GET',
    url: `${url}/v1/api/company/event`,
    headers: {
      auth: token
    }
  })
  .then(res => {
    dispatch({
      type: 'GET_NORMALIZED_EVENTS_SUCCESS',
      events: res.data.data
    })
  })
  .catch(err => {
    dispatch({
      type: 'GET_NORMALIZED_EVENTS_FAILED',
      message: err.response ? err.response.data.message : err.message
    })

    dispatch(showAlert())
  })
}

export const addEvent = (token, name) => dispatch => {
  dispatch({type: 'ADD_EVENT_REQUEST'})

  return Axios({
    method: 'POST',
    url: `${url}/v1/api/vendor/event`,
    headers: {
      auth: token
    },
    data: {
      name: name
    }
  })
  .then(res => {
    dispatch({
      type: 'ADD_EVENT_SUCCESS',
      message: res.data.message,
      events: res.data.data
    })
    dispatch(showAlert())
  })
  .catch(err => {
    dispatch({
      type: 'ADD_EVENT_FAILED',
      message: err.response ? err.response.data.message : err.message
    })
    dispatch(showAlert())
  })
}

export const deleteEvent = (token, id) => dispatch => {
  dispatch({type: 'DELETE_EVENT_REQUEST'})

  return Axios({
    method: 'DELETE',
    url: `${url}/v1/api/vendor/event/${id}`,
    headers: {
      auth: token
    }
  })
  .then(res => {
    dispatch({
      type: 'DELETE_EVENT_SUCCESS',
      message: res.data.message,
      events: res.data.data
    })
    dispatch(showAlert())
  })
  .catch(err => {
    dispatch({
      type: 'DELETE_EVENT_FAILED',
      message: err.response ? err.response.data.message : err.message
    })
    dispatch(showAlert())
  })
}