import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

import LogoFMC from "../../images/Logo.PNG";
import { UserContext } from "../UserContext";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";

import { FaBars } from "react-icons/fa";

const Header = ({ toggle }) => {
	const { isAuthenticated, currentUser } = useContext(UserContext);

	const [updatedUser, setUpdatedUser] = useState(null);

	const savedUser = JSON.parse(sessionStorage.getItem("currentUser"));

	useEffect(() => {
		if (savedUser !== null) {
			setUpdatedUser(savedUser);
		}
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<Container>
			<Box to="/">
				<Logo src={LogoFMC} onClick={toggleHome} />
				<Name>FindMyCrypto</Name>
			</Box>
			<ScreenFit onClick={toggle}>
				<FaBars />
			</ScreenFit>
			<Menu>
				<Item>
					<AboutLink
						to="about"
						smooth={true}
						duartion={500}
						spy={true}
						exact="true"
						activeClass="active"
						offset={-100}
					>
						About
					</AboutLink>
				</Item>
				<Item>
					<ServicesLink
						to="services"
						smooth={true}
						duartion={500}
						spy={true}
						exact="true"
						activeClass="active"
						offset={-100}
					>
						Services
					</ServicesLink>
				</Item>
				<Item>
					<MapLink
						to="map"
						smooth={true}
						duartion={500}
						spy={true}
						exact="true"
						activeClass="active"
						offset={-100}
					>
						Map
					</MapLink>
				</Item>
				<Item>
					{isAuthenticated || updatedUser ? (
						<>
							{" "}
							<ProfileLink
								to="profile"
								smooth={true}
								duartion={500}
								spy={true}
								exact="true"
								activeClass="active"
								offset={-100}
							>
								Profile
							</ProfileLink>{" "}
						</>
					) : (
						<>
							{" "}
							<SignupLink
								to="signup"
								smooth={true}
								duartion={500}
								spy={true}
								exact="true"
								activeClass="active"
								offset={-100}
							>
								Sign Up
							</SignupLink>{" "}
						</>
					)}
				</Item>
			</Menu>
			<ButtonBox>
				{isAuthenticated || currentUser ? (
					<>
						<LogOutButton />
					</>
				) : (
					<>
						<LogInButton />
					</>
				)}
			</ButtonBox>
		</Container>
	);
};

const Container = styled.div`
	top: 0;
	position: sticky;
	background-color: black;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 32px;
	height: 100px;
	z-index: 100;
	margin-top: -100;

	@media screen and (max-width: 1024px) {
		/* supposed to be 768px */
		transition: 0.8s all ease;
	}
`;

const Box = styled(LinkRouter)`
	display: flex;
	align-items: center;
	cursor: pointer;
	text-decoration: none;
`;

const Logo = styled.img`
	border-radius: 20px;
	width: 6rem;
`;

const Name = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
	color: white;
`;

const ScreenFit = styled.div`
	display: none;

	@media screen and (max-width: 1024px) {
		display: block;
		position: absolute;
		top: 1.5rem;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.5rem;
		cursor: pointer;
		color: white;
	}
`;

const Menu = styled.ul`
	font-size: 1.8rem;
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: 7rem;
	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

const Item = styled.div`
	height: 80px;
`;

const AboutLink = styled(LinkScroll)`
	color: white;
	display: flex;
	text-decoration: none;
	align-items: center;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid #01bf71;
	}
`;

const ProfileLink = styled(LinkScroll)`
	color: white;
	display: flex;
	text-decoration: none;
	align-items: center;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid #01bf71;
	}
`;

const ServicesLink = styled(LinkScroll)`
	color: white;
	display: flex;
	text-decoration: none;
	align-items: center;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid #01bf71;
	}
`;

const MapLink = styled(LinkScroll)`
	color: white;
	display: flex;
	text-decoration: none;
	align-items: center;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid #01bf71;
	}
`;

const SignupLink = styled(LinkScroll)`
	color: white;
	display: flex;
	text-decoration: none;
	align-items: center;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid #01bf71;
	}
`;

const ButtonBox = styled.div`
	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

export default Header;

//reviews collection
//reviews must have authorId, atmId, message of the review,
// replying to the review --> atmId.includes(id)
//useEffect POST to leave message
//when owner logs in : MyReviews section, with reply buttons with endpoint GETallreviews per

//need to add more info per user - with a useHistory
//push info to mongodb

//0. sign up with auth0
//1. check if they exist based off their email into Mongodb
//2. if not, redirect to sign-up form (my page)
//3. then we will add to mongodb!

//Google Places API - to find all locations and then display on google maps
//search for all the cities atm's
//get their longitude and lat to pin their locations on the map
//
