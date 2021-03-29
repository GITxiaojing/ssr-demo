import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Todo from '../pages/Todo/reducer';

const reducer = combineReducers({
  todo: Todo,
});

const store = () => {
  return createStore(reducer, applyMiddleware(thunk));
};

export default store;