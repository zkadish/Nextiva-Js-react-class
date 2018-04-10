import { Increment, Decrement } from '../constants/actions';

export const increment = () => {
  return {
    type: Increment
  }
}

export const decrement = () => {
  return {
    type: Decrement
  }
}

