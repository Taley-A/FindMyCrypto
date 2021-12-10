import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import SignUpForm from "./components/SignUpForm";

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Main>
				<Header />
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					<Route path="/sign-up">
						<SignUpForm />
					</Route>
				</Switch>
			</Main>
		</BrowserRouter>
	);
};

export default App;

const Main = styled.div``;
