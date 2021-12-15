import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const AllLocationBox = ({ location }) => {
	let history = useHistory();

	return (
		<Container>
			<TextBox>
				<Name> {location.name}</Name>
				<Crypto> •{location.cryptocurrencies}</Crypto>
				<Option> •{location.type}</Option>
				<Address> •{location.address}</Address>
				<Open> •{location.open}</Open>
				<Open> •{location.status}</Open>
			</TextBox>
			<ButtonBox>
				<Button>View</Button>
			</ButtonBox>
			<ButtonBox>
				<Button>Comment</Button>
			</ButtonBox>
		</Container>
	);
};

export default AllLocationBox;

const Container = styled.div`
	border: 2px solid #010606;
	padding: 30px;
	display: flex;
	justify-content: space-between;
`;

const Button = styled.div`
	background-color: #01bf71;
	color: #010606;
	cursor: pointer;
	border: none;
	outline: none;
	font-weight: 600;
	font-size: 1rem;
	border-radius: 10px;
	width: 5rem;
	height: 3rem;
	transition: all 0.2s ease-in-out;
	padding: 20px;
	margin-left: 15px;
	margin-top: 30px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
		rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: scale(1.2);
	}
`;

const ButtonBox = styled.div`
	margin-top: 16px;
`;

const TextBox = styled.div``;

const Name = styled.div`
	font-size: 24px;
	font-weight: 700;
	padding-bottom: 10px;
	text-decoration: underline;
`;

const Crypto = styled.div`
	padding-bottom: 5px;
`;
const Option = styled.div`
	padding-bottom: 5px;
`;
const Address = styled.div`
	padding-bottom: 5px;
`;
const Open = styled.div`
	padding-bottom: 5px;
`;
