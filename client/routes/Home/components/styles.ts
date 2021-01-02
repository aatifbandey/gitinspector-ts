import { css } from '@emotion/css';

export const parent = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const headParent = css`
	${parent}
	width: 90%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 0 0 2% 0;

`;

export const logoWrap = css`
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 4%;
	font-size:12px;
	
`;

export const cardContainer = css`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 95%;
`;

export const elementsParent = css`
	display: flex;
	justify-content:center;
	width: 90%;
	input {
		height: 40px;
    width: 40%;
    padding: 3px 0 0 10px;
	}
	select {
		margin: 0 0 0 2%;
		padding: 0px 0 0 8px;
	}
`;

export const notfound = css`
	
	width: 70%;
	justify-content: center;
	align-items: center;
	display: flex;
	font-size: 26px;
	margin: 3%;
`;

export const loadingClass = css`
	height: 182px;
	background: #ccc;
	width: 30%;
	margin: 1% 0 1% 1%;
	border-radius: 4px;

`;

export const headingText = css`
	margin: 4% 0 0 0%;
	font-size: 26px;
	font-weight: bold;
	&:div {
		color: #ccc;
	}
`;