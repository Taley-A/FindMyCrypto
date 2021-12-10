import React, { useContext } from "react";
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import LogoFMC from "../images/Logo.PNG";
import { UserContext } from "./UserContext";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";

import { FaBars } from "react-icons/fa";

const Header = () => {
	const { isAuthenticated } = useContext(UserContext);
	console.log(isAuthenticated);

	{
		isAuthenticated ? (
			<>
				<LogOutButton />
			</>
		) : (
			<>
				<LogInButton />
			</>
		);
	}

	return (
		<Container>
			<Box to="/">
				<Logo src={LogoFMC} />
				<Name>FindMyCrypto</Name>
			</Box>
			<ScreenFit>
				<FaBars />
			</ScreenFit>
			<Menu>
				<Item>
					<AboutLink to="about">About</AboutLink>
				</Item>
				<Item>
					<ServicesLink to="services">Services</ServicesLink>
				</Item>
				<Item>
					<MapLink to="map">Map</MapLink>
				</Item>
				<Item>
					<SignupLink to="signup">Sign Up</SignupLink>
				</Item>
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
		</Container>
	);
};

const Container = styled.div`
	background-color: black;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 32px;
	height: 136px;
	/* margin-top: -80px; */

	@media screen and (max-width: 960px) {
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

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 2.5rem;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.5rem;
		cursor: pointer;
		color: white;
	}
`;

const Menu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 768px) {
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
	@media screen and (max-width: 768px) {
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
