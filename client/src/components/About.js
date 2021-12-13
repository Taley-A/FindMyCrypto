import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Coin from "./Coin";
import digitalCurrency from "../images/digitalCurrency.png";

//

const About = () => {
	const [coins, setCoins] = useState([]);

	let newArr = coins.slice(0, 2);

	useEffect(() => {
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
			)
			.then((res) => {
				console.log(res.data);
				setCoins(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<Container>
				<Wrapper>
					<Row>
						<Column1>
							<CoinBox>
								{newArr.map((coin) => {
									return (
										<Coin
											key={coin.id}
											name={coin.name}
											image={coin.image}
											symbol={coin.symbol}
											volume={coin.market_cap}
											price={coin.current_price}
										/>
									);
								})}
							</CoinBox>
						</Column1>
						<Column2>
							<TextWrap>
								<Top>Cryptocurrency ATM Locator</Top>
								<Heading>
									Do you need to purchase Cryptocurrency or sell some in
									exchange for some cash?
								</Heading>
								<Subtitle>
									Easily find one of many ATM's around you to exchange some
									crypto for cash or to simply purchase one of your favorite
									coins.
								</Subtitle>
								<ImageContainer>
									<Image src={digitalCurrency} />
								</ImageContainer>
							</TextWrap>
						</Column2>
					</Row>
				</Wrapper>
			</Container>
		</>
	);
};

export default About;

const Container = styled.div`
	color: white;
	background: #063333;

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
	bottom: 750px;
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
`;

const ImageContainer = styled.div`
	max-width: 555px;
	height: 100%;
`;

const Image = styled.img`
	border-radius: 20px;
	width: 500px;
`;

const CoinBox = styled.div`
	justify-content: center;
	text-align: left;
`;
