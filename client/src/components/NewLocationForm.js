import React, { useState, useContext } from "react";
import styled from "styled-components";
import Geocode from "react-geocode";

import { useHistory } from "react-router";
import { UserContext } from "./UserContext";

import { FcGlobe } from "react-icons/fc";
import Swal from "sweetalert2";

const NewLocationForm = () => {
	Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
	Geocode.setLanguage("en");
	Geocode.setLocationType("ROOFTOP");

	const { v4: uuidv4 } = require("uuid");
	const _id = uuidv4();

	const { currentUser } = useContext(UserContext);

	const history = useHistory();

	// Initial state of state variable inputData.
	const initialState = {
		name: "",
		address: "",
		type: "",
		cryptocurrencies: "",
		kyc: "",
		open: "",
		status: "",
		manufacturer: "",
		atmId: "",
		ownerEmail: "",
		latLng: {},
	};

	// This state variable will contain the user input as they complete the sign-in form. Initial state is declared above.
	const [inputData, setInputData] = useState(initialState);

	// This function will be executed when the user has completed the form and clicked the Confirm button.
	const handleClick = async (ev) => {
		ev.preventDefault();

		let latitude = 0;
		let longitude = 0;

		// Generate geocode using the address
		await Geocode.fromAddress(`${inputData.address}`).then(
			(response) => {
				const { lat, lng } = response.results[0].geometry.location;
				latitude = lat;
				longitude = lng;
				console.log(lat, lng);
			},
			(error) => {
				console.error(error);
			}
		);
		console.log(latitude);
		// The data to be sent to the backend is the user input from the form.
		const data = {
			name: inputData.name,
			address: inputData.address,
			type: currentUser.type,
			cryptocurrencies: inputData.cryptocurrencies,
			kyc: inputData.kyc,
			open: inputData.open,
			status: inputData.status,
			manufacturer: inputData.manufacturer,
			atmId: _id,
			ownerEmail: currentUser.email,
			latLng: { lat: latitude, lng: longitude },
		};

		// Send user information to the back end.
		fetch("/api/newLocations", {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.status === 200) {
					setTimeout(() => {
						history.push("/");
						window.location.reload();
					}, 4000);
					Swal.fire({
						icon: "success",
						title: "New location has beed added!",
						text: "+100 RESPECT",
						showConfirmButton: false,
						timer: 3000,
					});
				} else {
					Swal.fire({
						icon: "error",
						title: "Incorrect information!",
						text: "Make sure the address is given properly.",
						footer: '<a href="">Why do I have this issue?</a>',
					});
				}
			});
	};

	let readyToSubmit = false;

	// Data validation for the user sign-in form.
	if (
		inputData.name !== "" &&
		inputData.address !== "" &&
		inputData.type !== "" &&
		inputData.cryptocurrencies !== "" &&
		inputData.kyc !== "" &&
		inputData.open !== "" &&
		inputData.status !== "" &&
		inputData.manufacturer !== ""
	) {
		readyToSubmit = true;
	}

	return (
		<Wrapper>
			<Form onSubmit={handleClick}>
				<BiggerBox>
					<Title>
						Add a new location here <FcGlobe />
					</Title>

					<Text>
						Please provide the following information to finish adding new
						location!
					</Text>

					<Box>
						<Label htmlFor="firstName">Name: </Label>
						<Input
							type="text"
							placeholder="Name"
							name="Name"
							onChange={(ev) => {
								setInputData({ ...inputData, name: ev.target.value });
							}}
						/>
					</Box>
					<Box>
						<Label htmlFor="lastName"> Address: </Label>
						<Input
							type="text"
							placeholder="Address"
							name="address"
							onChange={(ev) => {
								setInputData({ ...inputData, address: ev.target.value });
							}}
						/>
					</Box>
					<Box>
						<Label htmlFor="btcWallet"> Type: </Label>
						<Input
							type="text"
							placeholder="Type"
							name="type"
							onChange={(ev) => {
								setInputData({ ...inputData, type: ev.target.value });
							}}
						/>
					</Box>
					<Box>
						<Label htmlFor="firstName">Cryptocurrencies: </Label>
						<Input
							type="text"
							placeholder="Cryptocurrencies"
							name="Cryptocurrencies"
							onChange={(ev) => {
								setInputData({
									...inputData,
									cryptocurrencies: ev.target.value,
								});
							}}
						/>
					</Box>
					<Box>
						<Label htmlFor="firstName">KYC: </Label>
						<Input
							type="text"
							placeholder="KYC"
							name="KYC"
							onChange={(ev) => {
								setInputData({ ...inputData, kyc: ev.target.value });
							}}
						/>
					</Box>
					<Box>
						<Label htmlFor="firstName">Open: </Label>
						<Input
							type="text"
							placeholder="Open"
							name="Open"
							onChange={(ev) => {
								setInputData({ ...inputData, open: ev.target.value });
							}}
						/>
					</Box>
					<Box>
						<Label htmlFor="firstName">Status: </Label>
						<Input
							type="text"
							placeholder="Status"
							name="Status"
							onChange={(ev) => {
								setInputData({ ...inputData, status: ev.target.value });
							}}
						/>
					</Box>
					<Box>
						<Label htmlFor="firstName">Manufacturer: </Label>
						<Input
							type="text"
							placeholder="Manufacturer"
							name="Manufacturer"
							onChange={(ev) => {
								setInputData({ ...inputData, manufacturer: ev.target.value });
							}}
						/>
					</Box>

					<ButtonDiv>
						<Button type="reset">Clear</Button>
						{readyToSubmit ? (
							<Button type="submit">Confirm</Button>
						) : (
							<Button
								type="submit"
								disabled={true}
								style={{ cursor: "not-allowed " }}
							>
								Confirm
							</Button>
						)}
					</ButtonDiv>
				</BiggerBox>
			</Form>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	background-color: #063333;
	color: white;
	width: 100%;
	height: 100vh;
	justify-content: left;
`;

const Title = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 3rem;
	font-weight: bolder;
	color: white;
	padding-bottom: 50px;
`;

const Text = styled.div`
	display: flex;
	justify-content: center;
	font-size: 1rem;
	color: white;
	padding-top: 2rem;
	padding-bottom: 2rem;
	text-decoration: underline;
`;

const Form = styled.form`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	justify-self: auto;
	text-align: right;
	margin: 60px 40px 40px 40px;
	position: relative;
	padding: 24px;
	background-color: black;
	width: 42vw;
	height: 82vh;
	border-radius: 16px;
	font-size: 15px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Input = styled.input`
	border: #d2d2d2 1px solid;
	border-radius: 4px;
	margin: 10px;
	padding: 10px;
	height: 20px;
	width: 200px;
`;

const Label = styled.div`
	margin: 20px;
`;

const Button = styled.button`
	background-color: #01bf71;
	color: #010606;
	cursor: pointer;
	border: none;
	outline: none;
	font-weight: 600;
	font-size: 1.5rem;
	border-radius: 20px;
	width: 9rem;
	height: 4rem;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: scale(1.2);
	}
`;

const ButtonDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const Box = styled.div`
	overflow: hidden;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const BiggerBox = styled.div`
	padding: 80px;
`;

export default NewLocationForm;
