import { CHANGE_VALUES } from './types'

const defaultState = {
  list: []
};
export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_VALUES: 
      return {...state, ...action.data};
    default: return state;
  }
}