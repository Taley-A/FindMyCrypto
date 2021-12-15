import React from "react";

import styled from "styled-components";

import visitor from "../../images/Visitor.png";
import operator from "../../images/Operator.png";
import { FiUsers } from "react-icons/fi";

const Services = () => {
	return (
		<>
			<Container>
				<Wrapper>
					<Title>
						Services for everyone
						<Users />
					</Title>

					<Row>
						<Column1>
							<TextWrap>
								<Top>Operator</Top>
								<Heading>
									We help you display your crypto ATM's to all our visitors.
								</Heading>
								<Subtitle>
									Provide all the information about your ATM and allow users to
									interact with them by leaving reviews! Visitors can easily
									find them through our website and this allows you to have more
									visibity and drive traffic towards your machines.
								</Subtitle>
								<ImageContainer>
									<Image src={operator} />
								</ImageContainer>
							</TextWrap>
						</Column1>
						<Column2>
							<TextWrap>
								<Top>Visitor</Top>
								<Heading>
									Let us help you find a Cryptocurrency ATM near you!
								</Heading>
								<Subtitle>
									Conveniently locate crypto ATM's through our website and have
									the ability to leave reviews of the machines to help the
									crypto community.
								</Subtitle>
								<Subtitle>
									We also allow you to keep your digital wallet codes in your
									profile so you can easily access them during a transaction.
									Safely, comfortably and quickly buy or sell crypto through
									these machines!
								</Subtitle>
								<ImageContainer>
									<Image src={visitor} />
								</ImageContainer>
							</TextWrap>
						</Column2>
					</Row>
				</Wrapper>
			</Container>
		</>
	);
};

export default Services;

const Container = styled.div`
	color: #022121;
	background: white;

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
	margin-bottom: 16px;
	grid-area: col1;
	bottom: 950px;
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
`;

const ImageContainer = styled.div`
	max-width: 555px;
	height: 100%;
`;

const Image = styled.img`
	border-radius: 20px;
	width: 500px;
`;

const Title = styled.h1`
	text-align: center;
	padding-top: 30px;
	font-size: 3rem;
`;

const Users = styled(FiUsers)`
	margin-left: 40px;
	color: #01bf71;
	height: 70px;
	width: 70px;
`;
