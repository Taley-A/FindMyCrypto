import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const LogInButton = () => {
	const { loginWithRedirect } = useAuth0();

	return <Button onClick={() => loginWithRedirect()}>Sign In</Button>;
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
	border-radius: 20px;
	width: 6rem;
	height: 3rem;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: scale(1.2);
	}
`;
