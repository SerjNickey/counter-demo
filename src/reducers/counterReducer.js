//import { add, sub } from '../actions/counterActions';
import * as constants from '../utils/constants/counterConstants';


const initialState = {
  counter: 0
}
  
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    //case add.TRIGGER:
    case constants.ADD:
      return {
        ...state,
        counter: state.counter + action.payload
      }
    //case sub.TRIGGER:
    case constants.SUB:
      return {
        ...state,
        counter: state.counter - action.payload
      }      
    default:
      return state
  }
}


export default counterReducer;