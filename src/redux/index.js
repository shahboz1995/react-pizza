import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import pizzaReducer from './pizzaReducer';

// store 1. reducer, 2. state
export const store = createStore(pizzaReducer, applyMiddleware(thunk));
// console.log(store.getState());