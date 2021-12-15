"use strict";

const path = require("path");
const express = require("express");
const morgan = require("morgan");

const {
	handleLogin,
	addUser,
	getAllLocations,
	getLocationById,
	addLocation,
	deleteLocation,
	getAllReviews,
	getReviewById,
	getAllUsers,
	addReview,
	getUserById,
} = require("./handlers");

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// Get All Locations of the ATM's.
app.get("/api/locations", getAllLocations);

// Get location of ATM by id.
app.get("/api/locations/:email", getLocationById);

// Add new location of an ATM.
app.post("/api/newLocations", addLocation);

//Delete location of an ATM.
app.delete("/api/locations/:id/:email", deleteLocation);

// Get all Reviews.
app.get("/api/reviews", getAllReviews);

// Get Review by id.
app.get("/api/reviews/:email", getReviewById);

// Add new review to a location.
app.post("/api/reviews/:atm_Id", addReview);

// Get all Users.
app.get("/api/users", getAllUsers);

// Login Validation to see if client already exists in MongoDB.
app.get("/api/handleLogin/:email", handleLogin);

// Get user by their unique email.
app.get("/api/users/:email", getUserById);

// Add new user to MongoDB after sign-up process is successful.
app.post("/api/sign-up", addUser);

// This is our catch all endpoint.
app.get("*", (req, res) => {
	res.status(404).json({
		status: 404,
		message: "This is obviously not what you are looking for.",
	});
});

app.listen(PORT, function () {
	console.info("🌍 Listening on port " + PORT);
});
