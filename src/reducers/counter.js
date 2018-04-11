import { Increment, Decrement } from '../constants/actions';

export const counter = (state = { counter: 0 }, action) => {
  switch(action.type) {
    case Increment:
      return {
        ...state,
        counter: state.counter + 1
      };
    case Decrement:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state;
  }
}