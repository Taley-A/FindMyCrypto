import React, { createContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const { user, isAuthenticated, isLoading } = useAuth0();
	console.log(isAuthenticated);

	const savedUser = JSON.parse(sessionStorage.getItem("currentUser"));

	useEffect(() => {
		if (isAuthenticated === true) {
			setCurrentUser(user);
		}
	}, [isAuthenticated]);

	useEffect(() => {
		if (savedUser !== null) {
			fetch(`/api/users/${savedUser.email}`)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setCurrentUser(data.data);
				});
		}
	}, [isAuthenticated]);

	return (
		<UserContext.Provider
			value={{ currentUser, setCurrentUser, user, isAuthenticated, isLoading }}
		>
			{children}
		</UserContext.Provider>
	);
};
