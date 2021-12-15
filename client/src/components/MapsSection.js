import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import location from "../images/Location.png";
import { FcSearch } from "react-icons/fc";
import { FiArrowRight } from "react-icons/fi";
import { SiBitcoinsv } from "react-icons/si";

const MapsSection = () => {
	let history = useHistory();

	const handleButtonClick = () => {
		history.push("/maps");
	};

	return (
		<>
			<Container>
				<Wrapper>
					<Row>
						<Column1>
							<Button onClick={handleButtonClick}>
								FindMyCrypto <SiBitcoinsv />
							</Button>
						</Column1>
						<Column2>
							<TextWrap>
								<Top>Find the closest cryptocurrency ATM</Top>
								<Heading>
									Let's locate of one these ATM's together <FcSearch />
								</Heading>
								<Subtitle>
									You can go to our Map section by clicking the big button to
									the right.
									<Arrow />
								</Subtitle>
								<ImageContainer>
									<Image src={location} />
								</ImageContainer>
							</TextWrap>
						</Column2>
					</Row>
				</Wrapper>
			</Container>
		</>
	);
};

export default MapsSection;

const Container = styled.div`
	color: white;
	background: #022121;

	@media screen and (max-width: 768px) {
		padding: 100px 0px;
	}
`;

const Wrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 1200px;
	width: 100vw;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
	align-items: center;
`;

const Row = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;

	@media screen and (max-width: 768px) {
		grid-template-areas: "col1 col2";
	}
`;

const Column1 = styled.div`
	position: relative;
	color: white;
	width: 200px;
	margin-bottom: 15px;
	grid-area: col1;
	bottom: 872px;
`;

const Column2 = styled.div`
	position: relative;
	top: 64px;
	right: 64px;
	margin-bottom: 16px;
	padding: 0 16px;
`;

const TextWrap = styled.div`
	width: 700px;
	padding-top: 20px;
	padding-bottom: 60px;
	justify-content: space-between;
`;

const Top = styled.div`
	color: #01bf71;
	font-size: 16px;
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
	color: white;

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

const Subtitle = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: white;
	display: flex;
`;

const ImageContainer = styled.div`
	max-width: 555px;
	height: 100%;
`;

const Image = styled.img`
	border-radius: 20px;
	width: 650px;
`;

const Button = styled.button`
	position: relative;
	top: 150px;
	left: 150px;
	border-radius: 500px;
	padding: 0.35em 1.2em;
	border: 0.1em solid #01bf71;
	margin: 0 0.3em 0.3em 0;
	box-sizing: border-box;
	text-decoration: none;
	font-size: 2rem;
	font-weight: 700;
	color: white;
	background-color: #010606;
	text-align: center;
	transition: all 0.2s ease-in-out;
	width: 30rem;
	height: 30rem;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: scale(1.2);
		color: #010606;
		background-color: #01bf71;
		cursor: pointer;
	}
`;

const Arrow = styled(FiArrowRight)`
	height: 100px;
	width: 70px;
	color: #01bf71;
	position: relative;
	left: 10px;
	bottom: 25px;
`;
