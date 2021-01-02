import React, { useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';

import { getInjectors } from './sagaInjector';

/**
 * Dynamically injects a saga, passes component's props as saga arguments
 */

const useInjectSaga = ({ key, saga }:{key:any, saga:any}) => {
  const context:any = React.useContext(ReactReduxContext);
  /* eslint-disable */
  useEffect(() => {
    const injectors:any = getInjectors(context.store);

    injectors.injectSaga(key, { saga });

    return () => {
      injectors.ejectSaga(key);
    };
  }, []);
  /* eslint-enable */
};

export { useInjectSaga };