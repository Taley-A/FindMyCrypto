import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router";
import { UserContext } from "./UserContext";
import About from "./About";
import Services from "./Services";
import MapsSection from "./MapsSection";
import Profile from "./Profile";
import SignUpSection from "./SignUpSection";
import Swal from "sweetalert2";

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

	if (isAuthenticated) {
		// Loading message package!
		let timerInterval;
		Swal.fire({
			title: "Redirecteding you to the correct page.",
			html: "Estimated milliseconds left <b></b>.",
			timer: 1000,
			timerProgressBar: true,
			didOpen: () => {
				Swal.showLoading();
				const b = Swal.getHtmlContainer().querySelector("b");
				timerInterval = setInterval(() => {
					b.textContent = Swal.getTimerLeft();
				}, 100);
			},
			willClose: () => {
				clearInterval(timerInterval);
			},
		}).then((result) => {
			/* Read more about handling dismissals below */
			if (result.dismiss === Swal.DismissReason.timer) {
				console.log("I was closed by the timer");
			}
		});
	}

	return (
		<>
			<section id="about">
				<About />
			</section>
			<section id="services">
				<Services />
			</section>
			<section id="map">
				<MapsSection />
			</section>
			{currentUser ? (
				<section id="profile">
					<Profile currentUser={currentUser} />
				</section>
			) : (
				<section id="signup">
					<SignUpSection />
				</section>
			)}
		</>
	);
};

export default Homepage;
