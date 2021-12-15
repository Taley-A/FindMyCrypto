import React from "react";
import styled from "styled-components";

import SignUpButton from "./SignUpButton";

import JoinUs from "../../images/JoinUs.png";
import PiggyBank from "../../images/PiggyBank.png";

const MapsSection = () => {
	return (
		<>
			<Container>
				<Wrapper>
					<Row>
						<Column1>
							<TextWrap>
								<Top>join us at FindMyCrypto</Top>
								<Heading>
									Take advantage of our special features by signing up!
								</Heading>
								<Subtitle>
									Whether you are a visitor or an operator, we have a bunch of
									features that will make your crypto interactions easy and
									seamless.
								</Subtitle>
								<ImageContainer>
									<Image src={JoinUs} />
								</ImageContainer>
							</TextWrap>
						</Column1>
						<Column2>
							<ImageContainer>
								<Image2 src={PiggyBank} />
							</ImageContainer>
							<Text>Click below to get started!</Text>
							<Box>
								<SignUpButton />
							</Box>
						</Column2>
					</Row>
				</Wrapper>
			</Container>
		</>
	);
};

export default MapsSection;

const Container = styled.div`
	background: white;

	@media screen and (max-width: 768px) {
		padding: 100px 0px;
	}
`;

const Wrapper = styled.div`
	display: grid;
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

const Row = styled.div`
	margin-top: 48px;
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	height: 100vh;

	@media screen and (max-width: 768px) {
		grid-template-areas: "col1 col2";
	}
`;

const Column1 = styled.div`
	position: relative;
	bottom: 750px;
	color: white;
	width: 200px;
	margin-bottom: 15px;
	grid-area: col1;
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
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: #022121;
	display: flex;
`;

const ImageContainer = styled.div`
	max-width: 555px;
	height: 100%;
`;

const Image = styled.img`
	border-radius: 20px;
	width: 600px;
	height: 400px;
`;

const Image2 = styled.img`
	border-radius: 20px;
	width: 500px;
	height: 400px;
`;

const Box = styled.div`
	display: flex;
	justify-content: center;
`;

const Text = styled.h2`
	text-align: center;
	color: #022121;
	font-size: 48px;
	margin-top: 100px;
	margin-bottom: 100px;
`;
