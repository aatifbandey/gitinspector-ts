import React from "react";
import {arrayOf, string, shape, bool } from "prop-types"
import Card from "../../../components/Card";
import { cardContainer, notfound, loadingClass } from "./styles";
import { SearchResults, CardInterface } from "../interface";

const ResultContainer: React.FC<SearchResults> = (props) => {
  const { results, type, apiCall, loading } = props;


  const renderCards = () =>{
		
    return results.map((d:CardInterface, index)=>{
      const { avatar_url, organizations_url, html_url, login,
        name, description, forks, owner } = d;

      let imageUrl = avatar_url;
      let dataObj=[];

      if(type === 'user') {
        dataObj = [
          {
            label: "Username",
            val: login
          },
          {
            label: " Git URL",
            val: html_url
          },
          {
            label: "Org URL",
            val: organizations_url
          }
        ];
      } else {
        imageUrl = owner?.avatar_url;
        dataObj = [
          {
            label: "Name",
            val: name
          },
          {
            label: "Description",
            val: description
          },
          {
            label: "Forks",
            val: forks
          }
        ];
				
      }
      return(
        <Card 
          key={index}
          obj={dataObj}
          image={imageUrl}
        />
      )
    })
  }
	
  const renderLoadingCards = () => {
    const html = [];
    for (let k = 0; k < 9; k++) {
      html.push(<div className={loadingClass}>

      </div>)
    }
    return html;
  }
  return(
    <div className={cardContainer}>
      {loading ? renderLoadingCards(): renderCards()}
      {apiCall && !results.length ? <div className={notfound}> No result found</div>:""}

    </div>
  )
};
ResultContainer.propTypes = {
  results: arrayOf(shape({})).isRequired,
  type: string.isRequired,
  apiCall: bool.isRequired,
  loading: bool.isRequired
}
export default ResultContainer;