import React from "react";
import { string, shape } from "prop-types";
import { singleCard, imgHolder, content,  } from "./styles";

type CardProps = {
	image: string,
	obj: any
}
interface obj {
	label:string,
	val: string
}

const Card: React.FC<CardProps> = (props) => {
	const { image, obj } = props;
	
	const showContent = () => {

		return obj.map((d:obj, index:number)=>{

			return(
				<div key={index}><b>{d.label}</b>:{d.val}</div>
			)
		})
		
	
		
	}
  return(
		<div className={singleCard}>
			{image ? <div className={imgHolder}> <img src={image}/> </div> : ""}
			<div className={content}>
				{showContent()}
			</div>
		</div>
	)
}

Card.propTypes = {
	image: string.isRequired,
	obj: shape(({
		label: string.isRequired,
		val: string.isRequired
	}))
}


export default Card;