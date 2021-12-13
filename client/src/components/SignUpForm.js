import React, { useState, useContext } from "react";
import styled from "styled-components";

import { useHistory } from "react-router";
import { UserContext } from "./UserContext";

import { FaUserAlt } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import Swal from "sweetalert2";

const SignUpForm = () => {
	const { currentUser, setCurrentUser, user } = useContext(UserContext);
	const history = useHistory();

	// Initial state of state variable inputData.
	const initialState = {
		firstname: "",
		lastname: "",
		email: "",
		btcWallet: "",
		type: "",
	};

	// This state variable will contain the user input as they complete the sign-in form. Initial state is declared above.
	const [inputData, setInputData] = useState(initialState);

	// This function will be executed when the user has completed the form and clicked the Confirm button.
	const handleClick = (ev) => {
		ev.preventDefault();

		// The data to be sent to the backend is the user input from the form.
		const data = {
			firstName: inputData.firstName,
			lastName: inputData.lastName,
			email: currentUser.email,
			btcWallet: inputData.btcWallet,
			type: inputData.type,
		};

		// Send user information to the back end.
		fetch("/api/sign-up", {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.status === 200) {
					setCurrentUser(data);
					console.log(data);
					window.sessionStorage.setItem("currentUser", JSON.stringify(data));
					setTimeout(() => {
						history.push("/");
						window.location.reload();
					}, 4000);
					Swal.fire({
						icon: "success",
						title: "Sign up succesfully!",
						text: "+10 RESPECT",
						showConfirmButton: false,
						timer: 3000,
					});
				} else {
					Swal.fire({
						icon: "error",
						title: "Missing information!",
						text: "Please fill out all the required fields.",
						footer: '<a href="">Why do I have this issue?</a>',
					});
				}
			});
	};

	let readyToSubmit = false;

	// Data validation for the user sign-in form.
	if (
		inputData.firstName !== "" &&
		inputData.lastName !== "" &&
		inputData.type !== "" &&
		inputData.btcWallet !== ""
	) {
		// If the user input in the form meets all the requirements,
		// `readyToSubmit` becomes true and the Confirm button is enabled.
		readyToSubmit = true;
	}

	console.log(inputData.type);

	return (
		<Wrapper>
			<Form onSubmit={handleClick}>
				<Title>
					Your E-mail has been verified <Approval />
				</Title>

				<Text>
					Please provide the following information to finish signing up!
				</Text>
				<Container>
					<Box>
						<Label htmlFor="firstName">First Name: </Label>
						<Input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={(ev) => {
								setInputData({ ...inputData, firstName: ev.target.value });
							}}
						/>
					</Box>
					<Box>
						<Label htmlFor="lastName"> Last Name: </Label>
						<Input
							type="text"
							placeholder=" Last Name"
							name="lastName"
							onChange={(ev) => {
								setInputData({ ...inputData, lastName: ev.target.value });
							}}
						/>
					</Box>
					<Box>
						<Label htmlFor="btcWallet"> BTC Wallet: </Label>
						<Input
							type="text"
							placeholder="BTC Wallet"
							name="btcWallet"
							onChange={(ev) => {
								setInputData({ ...inputData, btcWallet: ev.target.value });
							}}
						/>
					</Box>
					<Option>
						Type of user <FaUserAlt />
					</Option>
					<Box>
						<RadioLabel htmlFor="visitor">Visitor</RadioLabel>
						<RadioDiv>
							<Input
								type="radio"
								name="type"
								id="visitor"
								onChange={(ev) => {
									setInputData({ ...inputData, type: "visitor" });
								}}
							/>
						</RadioDiv>

						<RadioLabel htmlFor="operator"> Operator </RadioLabel>
						<RadioDiv>
							<Input
								type="radio"
								name="type"
								id="operator"
								onChange={(ev) => {
									setInputData({ ...inputData, type: "operator" });
								}}
							/>
						</RadioDiv>
					</Box>
				</Container>
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
			</Form>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	background-color: #063333;
	color: white;
	width: 100vw;
	height: 90vh;
	justify-content: center;
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
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: right;
	margin: 40px;
	position: relative;
	padding: 24px;
	background-color: #010606;
	width: 42vw;
	height: 80vh;
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

const Option = styled.div`
	text-align: center;
	font-size: 2rem;
	padding-top: 80px;
	padding-bottom: 50px;
`;

const ButtonDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const Box = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const RadioDiv = styled.div`
	margin-left: -100px;
`;

const RadioLabel = styled.div`
	margin: 20px;
	font-size: 32px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 30px;
`;

const Approval = styled(FcApproval)``;

export default SignUpForm;
