import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const LogInButton = () => {
	const { loginWithRedirect } = useAuth0();

	return <Button onClick={() => loginWithRedirect()}>Sign Up</Button>;
};

export default LogInButton;

const Button = styled.button`
	background-color: #01bf71;
	color: #010606;
	cursor: pointer;
	text-decoration: none;
	border: none;
	outline: none;
	font-weight: 600;
	font-size: 28px;
	border-radius: 40px;
	width: 16rem;
	height: 8rem;
	transition: all 0.2s ease-in-out;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: scale(1.2);
	}
`;
