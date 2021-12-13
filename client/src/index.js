import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./components/UserContext";

console.log(process.env.REACT_APP_GOOGLE_API_KEY);

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain="dev-9fm16la2.us.auth0.com"
			clientId="mOdaAuNU5zqBPjemc3rgQsXPZP8sM4Ge"
			redirectUri={window.location.origin}
		>
			<UserProvider>
				<App />
			</UserProvider>
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
