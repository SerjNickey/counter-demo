import { add, sub } from '../actions/counterActions'


const initialState = {
  counter: 0
}
  
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case add.TRIGGER:
      return {
        ...state,
        counter: state.counter + 1
      }
    case sub.TRIGGER:
      return {
        ...state,
        counter: state.counter - 1
      }      
    default:
      return state
  }
}


export default counterReducer