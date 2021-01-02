import React, { useState, useEffect } from "react";
import { bool, func, shape, string, object } from "prop-types";
import { debounce } from "lodash";
import { getGitData, getDataFromStore } from "../actions";

import ResultContainer from "./ResultContainer";
import { parent, elementsParent } from "./styles";
import Heading from "./Heading";

import { HomeProps } from "../interface";

const View : React.FC<HomeProps> = (props) => {
	const { dispatch, state } = props;
	const [ loading, updateLoading] = useState<boolean>(false);
	const [search, updateSearch] = useState<string>('');
	const [type, selectType] = useState<string>('user');

	
	const apiCall:boolean = state.apiCall;

	let results:any;
	if(loading ) {
		results = state.data ? state.data[`${state.search}_${state.type}`] : []
	} else {
		results = state.data ? state.data[`${search}_${type}`] : []
	}
	
	useEffect(()=>{
		// Show loading effect
		setTimeout(()=>{
			updateLoading(false);
		}, 500);
		
	},[state.data])
	
	
	const performSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		let searchVal = e.target.value;
		searchVal= searchVal.trim();
		if(searchVal.length >= 3) {
			
			if(state.data && state.data[`${searchVal}_${type}`]) {
				dispatch(getDataFromStore({
					search: searchVal,
					type
				}));
			} else {
				dispatch(getGitData({
					search: searchVal,
					type,
				}));
				if(searchVal) {
					updateLoading(true);
				}
			}
			
		} else {
			dispatch(getDataFromStore({
				search:"",
				type
			}));	
		}
	
		updateSearch(searchVal);
		

	}
	const getData = debounce(performSearch, 500);

	const onChange = (e:React.FormEvent<HTMLSelectElement>) => {
		if(search && search.length >=3) {
			if(state.data && state.data[`${search}_${e.currentTarget.value}`]) {
				dispatch(getDataFromStore({
					search,
					type: e.currentTarget.value
				}));
			} else {
				dispatch(getGitData({
					search,
					type: e.currentTarget.value
				}))
				updateLoading(true);
			}
		}
		selectType(e.currentTarget.value);
	}
  return(
    <div className={parent}>

		<Heading />
      
      	<div className={elementsParent}>
			<input type="text" placeholder={"Start typing to search"} onChange={getData} />
			<select onChange={onChange} >
				<option selected={type === 'user'} value="user">Users</option>
				<option selected={type === 'repo'} value={"repo"}>Repositories</option>
			</select>
      	</div>
		
		{ results  ? <ResultContainer results={results} type={type} apiCall={apiCall} loading={loading}/> : ""}
				
		
    </div>
  )
};

View.propTypes = {
	dispatch: func.isRequired,
	state: shape({
		search: string.isRequired,
		type: string.isRequired,
		apiCall: bool.isRequired,
		data: object.isRequired
	}).isRequired
}


export default View;