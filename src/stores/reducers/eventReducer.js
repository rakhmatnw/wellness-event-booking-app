const initState = {
  isFetching: false,
  message: '',
  events: []
}

export const eventReducer = (state = initState, action) => {

  if(action.type === 'GET_EVENTS_REQUEST' ||
    action.type === 'GET_NORMALIZED_EVENTS_REQUEST' ||
    action.type === 'ADD_EVENT_REQUEST' ||
    action.type === 'DELETE_EVENT_REQUEST'){
      return {
        ...state,
        isFetching: true
      }
  }

  if(
    action.type === 'GET_EVENTS_SUCCESS' ||
    action.type === 'GET_NORMALIZED_EVENTS_SUCCESS' ||
    action.type === 'ADD_EVENT_SUCCESS' ||
    action.type === 'DELETE_EVENT_SUCCESS'
  ){
    return {
      ...state,
      isFetching: false,
      message: action.message,
      events: action.events
    }
  }

  if(
    action.type === 'GET_EVENTS_FAILED' ||
    action.type === 'GET_NORMALIZED_EVENTS_FAILED' ||
    action.type === 'ADD_EVENT_FAILED' ||
    action.type === 'DELETE_EVENT_FAILED'){
    return {
      ...state,
      isFetching: false,
      message: action.message
    }
  }

  if(action.type === 'RESET_EVENT'){
    return{
      isFetching: false,
      message: '',
      events: []
    }
  }

  return state
}