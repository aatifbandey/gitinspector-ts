import { css } from '@emotion/css';


export const singleCard = css`
	display: flex;
	width: 30%;
	border: 1px solid #ccc;
  	margin: 1% 0% 1% 1%;
  	border-radius: 4px;
	border-left: 0px;
	border-top: 0px;
	border-right: 0px;
	padding: 10px;
	img {
		width: 100%;
	}
`;

export const content = css`
	display: flex;
	flex-direction: column;
	justify-content: start;
	margin: 0 0 0 2%;
	width: 55%;
	div {
		word-break: break-all;
		margin: 8% 0 0 2%;
	}
`;
export const imgHolder = css`
	display: flex;
	align-items: center;
	width: 40%;
	margin: 0 0 0 1%;
`;