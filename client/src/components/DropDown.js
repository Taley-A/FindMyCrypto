import React, { useContext } from "react";
import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

import { FaTimes } from "react-icons/fa";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";
import { UserContext } from "./UserContext";

const DropDown = () => {
	const { isAuthenticated } = useContext(UserContext);
	console.log(isAuthenticated);

	return (
		<Container>
			<Box>
				<X />
			</Box>
			<MenuWrapper>
				<Menu>
					<MenuLink to="about">About</MenuLink>

					<MenuLink to="services">Services</MenuLink>

					<MenuLink to="Map">Map</MenuLink>

					<MenuLink to="signupt">Sign Up</MenuLink>
				</Menu>
				<ButtonBox>
					{isAuthenticated ? (
						<>
							<LogOutButton />
						</>
					) : (
						<>
							<LogInButton />
						</>
					)}
				</ButtonBox>
			</MenuWrapper>
		</Container>
	);
};

// opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
// top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

export default DropDown;

const Container = styled.aside`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	align-items: center;
	display: grid;
	width: 100%;
	height: 100%;
	background: #0c0c0c;
	transition: 0.4s ease-in-out;
`;

const X = styled(FaTimes)`
	cursor: pointer;
	color: white;
	transition: 0.3s ease-in-out;

	&:hover {
		transition: 0.3s ease-in-out;
		transform: scale(1.3);
	}
`;

const Box = styled.div`
	cursor: pointer;
	position: absolute;
	font-size: 2rem;
	top: 1.3rem;
	right: 1.5rem;
	background: transparent;
	outline: none;
`;

const MenuWrapper = styled.div`
	color: white;
`;

const Menu = styled.ul`
	display: grid;
	grid-template-rows: repeat(5, 100px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(5, 70px);
	}
`;

const MenuLink = styled(LinkScroll)`
	color: white;
	font-size: 1.6rem;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
	transition: 0.3s ease-in-out;

	&:hover {
		transition: 0.3s ease-in-out;
		color: #01bf71;
	}
`;

const ButtonBox = styled.div`
	display: flex;
	justify-content: center;
`;
