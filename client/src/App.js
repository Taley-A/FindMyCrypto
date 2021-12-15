import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import DropDown from "./components/DropDown";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import SignUpForm from "./components/SignUpForm";
import Maps from "./components/Maps";
import NewLocationForm from "./components/NewLocationForm";
import AllLocations from "./components/AllLocations";

const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<BrowserRouter>
			<GlobalStyles />
			<Main>
				<Header toggle={toggle} />
				<DropDown isOpen={isOpen} toggle={toggle} />
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					<Route path="/sign-up">
						<SignUpForm />
					</Route>
					<Route path="/maps">
						<MapsContainer>
							<Maps />
							<AllLocations />
						</MapsContainer>
					</Route>
					<Route path="/new-location">
						<NewLocationForm />
					</Route>
				</Switch>
			</Main>
		</BrowserRouter>
	);
};

export default App;

const Main = styled.div``;

const MapsContainer = styled.div`
	display: flex;
`;
