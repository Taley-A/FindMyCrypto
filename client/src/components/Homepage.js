import React, { useContext, useEffect, useState } from "react";

import styled from "styled-components";

import { useHistory } from "react-router";
import { UserContext } from "./UserContext";
import About from "./About";
import Services from "./Services";

const Homepage = () => {
	const { isAuthenticated, setCurrentUser, currentUser } =
		useContext(UserContext);

	const history = useHistory();

	console.log(currentUser);

	// Verify if the email already exists in MongoDB before displaying homepage.
	useEffect(() => {
		if (isAuthenticated) {
			// send them to the proper page
			fetch(`/api/handleLogin/${currentUser.email}`)
				.then((res) => res.json())
				.then((res) => {
					if (res.status === 200) {
						window.sessionStorage.setItem(
							"currentUser",
							JSON.stringify(res.data)
						);
						history.push("/");
						window.location.reload();
					} else if (res.status === 404) {
						history.push("/sign-up");
					}
				});
		}
	}, [currentUser]);

	return (
		<>
			<About />
			<Services />
		</>
	);
};

export default Homepage;
