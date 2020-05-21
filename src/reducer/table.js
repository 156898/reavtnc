const initialState = {
  data:[],
  }
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
  
    case "TALBEHOME":
      return { ...state,data:payload.users}
    default:
      return state
    }
  }