import React, { createContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const history = useHistory();
	const [currentUser, setCurrentUser] = useState(null);
	const { user, isAuthenticated, isLoading } = useAuth0();
	console.log(user);

	useEffect(() => {
		if (isAuthenticated) {
			setCurrentUser(user);
			console.log(user);
		}
	}, [isAuthenticated]);

	// this is meant to push user sign-up info into mongodb!
	// const pushUserToMongo = async () => {
	// 	const res = await fetch(`/api/handleLogin/`);
	// };

	return (
		<UserContext.Provider
			value={{ currentUser, setCurrentUser, user, isAuthenticated, isLoading }}
		>
			{children}
		</UserContext.Provider>
	);
};
