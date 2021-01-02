import React from "react";

import { useDispatch, useSelector } from 'react-redux';

import { useInjectSaga } from '../../saga/injectSaga';

import homeSaga from './saga';
import View from "./components";
import { RootState } from "../../reducers";

const Home: React.FC = (props) => {
	
  useInjectSaga({ key: 'homeSaga', saga: homeSaga });
  const dispatch = useDispatch();
	
  const reducerState = useSelector((state: RootState)=> state.homeReducer);
	
  return  (
    reducerState ? <View {...props} state={reducerState}  dispatch={dispatch} /> : <div></div>
  );
  
}

export default Home;

