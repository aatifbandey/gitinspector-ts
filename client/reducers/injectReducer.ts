import { useContext, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';
import { getInjectors } from './reducerInjectors';

interface ReducerProps {
  key: string,
  reducer: Function
  // any other props that come into the component
}

export const useInjectReducer = ({ key, reducer }: ReducerProps) => {
  const context:any = useContext(ReactReduxContext);

  useEffect(() => {
    getInjectors(context.store).injectReducer(key, reducer);
  }, []);
};
