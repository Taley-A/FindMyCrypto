import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import LocationBox from "./LocationBox";
import ReviewsBox from "./ReviewsBox";

import message from "../images/Message.png";
import profilePic from "../images/Profile.png";
import machine from "../images/Machine.png";

import { FiArrowDown } from "react-icons/fi";

const Profile = ({ currentUser }) => {
	let history = useHistory();
	const [reviews, setReviews] = useState([]);
	const [locations, setLocations] = useState([]);

	let showVisitorInfo = false;

	if (currentUser.type === "visitor") {
		showVisitorInfo = true;
	}

	useEffect(() => {
		fetch(`/api/reviews/${currentUser.email}`)
			.then((res) => res.json())
			.then((res) => {
				setReviews([res.data]);
			});
	}, []);

	useEffect(() => {
		fetch(`/api/locations/`)
			.then((res) => res.json())
			.then((res) => {
				setLocations(res.data);
			});
	}, []);

	console.log(locations);

	const handleNewLocationCLick = () => {
		history.push("/new-location");
	};

	return (
		<>
			<Container>
				<Wrapper>
					<Column1>
						<TextWrap>
							<Top>My Profile</Top>
							<Heading>
								Find your account details below
								<ArrowDown />
							</Heading>
							<Subtitle>First Name: {currentUser.firstName}</Subtitle>
							<Subtitle>Last Name: {currentUser.lastName}</Subtitle>
							<Subtitle>Bitcoin Wallet: {currentUser.btcWallet}</Subtitle>
							<Subtitle>Email : {currentUser.email}</Subtitle>
							<ImageContainer>
								<Image src={profilePic} />
							</ImageContainer>
						</TextWrap>
					</Column1>
					<Column2>
						{showVisitorInfo ? (
							<TextWrap>
								<Top>Your Reviews</Top>
								<Heading>Here is everything you had to say </Heading>
								<Subtitle>
									{reviews.map((review) => {
										return <ReviewsBox review={review} />;
									})}
								</Subtitle>
								<ImageContainer>
									<Image2 src={message} />
								</ImageContainer>
							</TextWrap>
						) : (
							<TextWrap2>
								<Top>My Locations</Top>
								<Heading> All the ATM's you operate. </Heading>
								<Subtitle2>
									{locations.map((location) => {
										if (location.ownerEmail === currentUser.email) {
											return (
												<LocationBox
													location={location}
													currentUser={currentUser}
												/>
											);
										}
									})}
								</Subtitle2>
								<LocationFormButton onClick={handleNewLocationCLick}>
									Add a new location
								</LocationFormButton>
							</TextWrap2>
						)}
					</Column2>
				</Wrapper>
			</Container>
		</>
	);
};

export default Profile;

const Container = styled.div`
	background: white;
	@media screen and (max-width: 768px) {
		padding: 100px 0px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	z-index: 1;
	height: 100vh;
	width: 100vw;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
	align-items: center;
`;

const Column1 = styled.div`
	margin-top: 20px;
`;

const Column2 = styled.div`
	position: relative;
	top: 170px;
`;

const TextWrap = styled.div`
	width: 700px;
	padding-bottom: 60px;
	justify-content: space-between;
`;

const TextWrap2 = styled.div`
	display: grid;
	overflow: hidden;
	width: 700px;
	padding-bottom: 60px;
	justify-content: space-between;
`;

const Top = styled.div`
	color: #01bf71;
	font-size: 24px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 56px;
`;

const Heading = styled.h1`
	margin-bottom: 56px;
	width: 600px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: #022121;

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

const Subtitle = styled.p`
	width: 450px;
	margin-bottom: 20px;
	font-size: 24px;
	font-weight: 600;
	line-height: 24px;
	color: #022121;
	display: flex;
`;

const Subtitle2 = styled.p`
	margin: 10px;
	font-size: 24px;
	font-weight: 600;
	color: #022121;
`;

const ImageContainer = styled.div`
	max-width: 555px;
	height: 100%;
`;

const Image = styled.img`
	position: relative;
	top: 50px;
	right: 50px;
	width: 550px;
`;

const Image2 = styled.img`
	border-radius: 20px;
	width: 400px;
`;

const ArrowDown = styled(FiArrowDown)`
	margin-top: 10px;
	margin-left: 30px;
`;

const LocationFormButton = styled.button`
	position: relative;
	left: 120px;
	display: flex;
	background-color: #01bf71;
	color: #010606;
	cursor: pointer;
	border: none;
	outline: none;
	font-weight: 600;
	font-size: 1.5rem;
	border-radius: 20px;
	width: 12rem;
	height: 6rem;
	transition: all 0.2s ease-in-out;
	margin-left: 150px;
	margin-bottom: 30px;
	margin-top: 40px;
	padding: 20px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
		rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: scale(1.2);
	}
`;
