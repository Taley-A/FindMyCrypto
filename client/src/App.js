import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import DropDown from "./components/Navigation/DropDown";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Navigation/Header";
import Homepage from "./components/HomePage/Homepage";
import SignUpForm from "./components/SignUp/SignUpForm";
import Maps from "./components/MapsStuff/Maps";
import NewLocationForm from "./components/HomePage/NewLocationForm";
import AllLocations from "./components/MapsStuff/AllLocations";

const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const [centerPoint, setCenterPoint] = useState({
		lat: 45.460815,
		lng: -73.65126,
	});

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
							<Maps centerPoint={centerPoint} />
							<AllLocations setCenterPoint={setCenterPoint} />
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
