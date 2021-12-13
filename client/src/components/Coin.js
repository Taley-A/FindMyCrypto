import React from "react";
import styled from "styled-components";

const Coin = ({ image, name, symbol, price, volume }) => {
	return (
		<Container>
			<Row>
				<Info>
					<Image src={image} alt={crypto} />
					<Name>{name}</Name>
				</Info>
				<Data>
					<Price>Current Price: ${price}</Price>
					<Volume>Market Cap: ${volume.toLocaleString()}</Volume>
				</Data>
			</Row>
		</Container>
	);
};

export default Coin;

const Container = styled.div`
	width: 300px;
`;

const Row = styled.div``;

const Info = styled.div``;

const Image = styled.img`
	width: 200px;
`;

const Name = styled.h1`
	font-size: 3rem;
	margin-top: 25px;
	margin-bottom: 25px;
`;

const Data = styled.div`
	margin-top: 25px;
	margin-bottom: 25px;
`;

const Price = styled.p`
	font-size: 2rem;
	color: #01bf71;
	margin-top: 25px;
	margin-bottom: 25px;
`;

const Volume = styled.p``;
