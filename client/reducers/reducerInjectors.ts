import invariant from 'invariant';
import { isEmpty, isFunction, isString } from 'lodash';



import { checkStore } from './checkStore';
import  { createReducer } from './index';

export const injectReducerFactory = (store:any, isValid: boolean) => {
  return function injectReducer(key:string, reducer:Function) {
    if (!isValid) checkStore(store);

    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      '(app/utils...) injectReducer: Expected `reducer` to be a reducer function',
    );
    /* eslint-disable */
    // Check `store.injectedReducers[key] === reducer` for hot reloading when a key
    // is the same but a reducer is different
    if (
      Reflect.has(store.injectedReducers, key)
      && store.injectedReducers[key] === reducer
    ) return;

    store.injectedReducers[key] = reducer; 
    store.replaceReducer(createReducer(store.injectedReducers));
    /* eslint-enable */
  };
}

export const getInjectors = (store:object) => {
  checkStore(store);

  return {
    injectReducer: injectReducerFactory(store, true),
  };
}