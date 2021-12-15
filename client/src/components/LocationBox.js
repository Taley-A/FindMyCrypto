import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const LocationBox = ({ location, currentUser }) => {
	let history = useHistory();
	console.log(currentUser);

	// how do I add the atmID ???

	const handleDelete = (ev) => {
		ev.preventDefault();
		fetch(`/api/locations/${location.id}/${currentUser.email}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				atmId: location.id,
				ownerEmail: currentUser.email,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status === 200) {
					setTimeout(function () {
						history.push("/");
						window.location.reload();
					}, 500);
				}
			});
	};

	return (
		<Container>
			<div>
				<Name>{location.name}</Name>
				<Crypto>{location.cryptocurrencies}</Crypto>
				<Option>{location.type}</Option>
				<Address>{location.address}</Address>
				<Open>{location.Open}</Open>
			</div>
			<ButtonBox>
				<Button onClick={handleDelete}>Delete</Button>
			</ButtonBox>
		</Container>
	);
};

export default LocationBox;

const Container = styled.div`
	border: 2px solid #01bf71;
	border-radius: 10px;
	padding: 30px;
	display: flex;
	justify-content: space-between;
`;

const Button = styled.div`
	background-color: #ff0000;
	color: #010606;
	cursor: pointer;
	border: none;
	outline: none;
	font-weight: 600;
	font-size: 1.5rem;
	border-radius: 20px;
	width: 8rem;
	height: 4rem;
	transition: all 0.2s ease-in-out;
	padding: 20px;
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

const Name = styled.div``;

const Crypto = styled.div``;
const Option = styled.div``;
const Address = styled.div``;
const Open = styled.div``;
