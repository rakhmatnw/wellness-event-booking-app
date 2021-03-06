const initState = {
  isFetching: false,
  message: '',
  bookings: []
}

export const bookingReducer = (state=initState, action) => {

  if(action.type === 'GET_BOOKINGS_REQUEST' ||
    action.type === 'ADD_BOOKING_REQUEST' ||
    action.type === 'RESPOND_BOOKING_REQUEST'){
    return {
      ...state,
      isFetching: true
    }
  }

  if(action.type === 'GET_BOOKINGS_SUCCESS' ||
    action.type === 'ADD_BOOKING_SUCCESS' ||
    action.type === 'RESPOND_BOOKING_SUCCESS'){
    return {
      ...state,
      isFetching: false,
      bookings: action.bookings,
      message: action.message
    }
  }

  if(action.type === 'GET_BOOKINGS_FAILED' ||
    action.type === 'ADD_BOOKING_FAILED' ||
    action.type === 'RESPOND_BOOKING_FAILED'){
    return {
      ...state,
      isFetching: false,
      message: action.message
    }
  }

  return state
}