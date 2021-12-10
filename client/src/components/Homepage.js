import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { useHistory } from "react-router";
import { UserContext } from "./UserContext";

const Homepage = () => {
	const { currentUser, isAuthenticated } = useContext(UserContext);

	const history = useHistory();

	// Verify if the email already exists in MongoDB before displaying homepage.
	useEffect(() => {
		if (isAuthenticated) {
			// send them to the proper page
			fetch(`/api/handleLogin/${currentUser.email}`)
				.then((res) => res.json())
				.then((res) => {
					if (res.status === 404) {
						history.push("/sign-up");
					}
				});
		}
	}, [isAuthenticated]);

	return "homepage";
};

export default Homepage;
