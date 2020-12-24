import { createStore } from 'redux';
import rootReducer from './rootReducer';


export const configureStore = (preloadedState) => {
   
  const store = createStore(
    rootReducer,
    preloadedState
  );

  return store;
}