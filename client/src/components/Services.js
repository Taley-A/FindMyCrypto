import React, { useContext, useEffect, useState } from "react";

import styled from "styled-components";

import { useHistory } from "react-router";
import { UserContext } from "./UserContext";
import { Button } from "react-scroll";

const Services = () => {
	return (
		<>
			<Container>
				<Wrapper>
					<Row>
						<Column1>
							<TextWrap>
								<Top>We are here to help!</Top>
								<Heading>Heading</Heading>
								<Subtitle>Subtitle</Subtitle>
							</TextWrap>
						</Column1>
						<Column2>
							<ImageContainer>
								<Image />
							</ImageContainer>
						</Column2>
					</Row>
				</Wrapper>
			</Container>
		</>
	);
};

export default Services;

const Container = styled.div`
	background: white;

	@media screen and (max-width: 768px) {
		padding: 100px 0px;
	}
`;

const Wrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 860px;
	width: 100vw;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
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
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`;

const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`;

const TextWrap = styled.div`
	max-width: 540px;
	padding-top: 0px;
	padding-bottom: 60px;
`;

const Top = styled.div`
	color: #01bf71;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;
`;

const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: black;

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

const Subtitle = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: black;
`;

const ButtonWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;

const ImageContainer = styled.div`
	max-width: 555px;
	height: 100%;
`;

const Image = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`;
