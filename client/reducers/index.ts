/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';


import { routerReducer } from 'react-router-redux';
import { homeReducer } from '../routes/Home/reducer';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export const createReducer = (injectedReducers = {}) => {
  const rootReducer = combineReducers({
    routing: routerReducer,
    homeReducer,
    ...injectedReducers,
  });
  
  return rootReducer;
}
const rootState = createReducer();

export type RootState = ReturnType<typeof rootState>