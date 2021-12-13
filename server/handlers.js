"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

// Get all the ATM locations. ----------------------------------------------------------------------

const getAllLocations = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();

		const db = client.db("FindMyCrypto");

		const result = await db.collection("locations").find().toArray();

		result
			? res.status(200).json({ status: 200, data: result })
			: res.status(404).json({ status: 404, data: "Locations not found." });
	} catch {
		res.status(500).json({
			status: 500,
			message: "Something went wrong, please try again later.",
		});
	} finally {
		client.close();
	}
};

// Get a specific ATM with its id. ----------------------------------------------------------------------

const getLocationById = async (req, res) => {
	const { id } = req.params;

	const client = new MongoClient(MONGO_URI, options);
	try {
		await client.connect();
		const db = client.db("FindMyCrypto");

		const result = await db.collection("locations").findOne({ atmId: id });

		result
			? res.status(200).json({ status: 200, data: result })
			: res.status(404).json({ status: 404, data: "Location not found" });
	} catch (err) {
		res.status(500).json({
			status: 500,
			message: "Something went wrong, please try again later.",
		});
	} finally {
		client.close();
	}
};

// Add a new location of an ATM to MongoDB. ----------------------------------------------------------------------
const addLocation = async (req, res) => {
	const id = uuidv4();

	const {
		name,
		address,
		pinLocation,
		type,
		cryptocurrncies,
		kyc,
		open,
		status,
		manufacturer,
		ownerEmail,
	} = req.body;

	if (
		!name ||
		!address ||
		!pinLocation ||
		!type ||
		!cryptocurrncies ||
		!kyc ||
		!open ||
		!status ||
		!manufacturer ||
		!ownerEmail
	) {
		res.status(400).json({
			status: "error",
			message:
				"Some information is missing, please fill out all the required fields.",
		});
	}

	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		const db = client.db("GroupProject");

		let newLocation = await db
			.collection("locations")
			.insertOne({ ...req.body, atmId: id });

		// Update the operator's atmId array.
		const query = { email: ownerEmail };

		const newValues = {
			$push: { atmId: id },
		};

		await db.collection("users").updateOne(query, newValues);

		res.status(200).json({ status: 200, data: newLocation });
	} catch (err) {
		console.log(err),
			res.status(500).json({
				status: 500,
				message: "Something went wrong, please try again later.",
			});
	} finally {
		client.close();
	}
};

// Delete location of an ATM ----------------------------------------------------------------------

const deleteLocation = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	const { id, email } = req.params;

	// connect to the client
	await client.connect();

	// connect to the database (the one created in Mongo)
	const db = client.db("FindMyCrypto");
	console.log("connected!");

	try {
		//insert object to test
		const result = await db.collection("location").deleteOne({ atmId: id });
		console.log(result);

		const query = { email };

		const removeValue = {
			$pull: { atmId: id },
		};

		await db.collection("users").updateOne(query, removeValue);

		res.status(200).json({
			status: 200,
			message: `Location deleted for ATM Id: ${id}.`,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: 500, message: err.message, data: id });
	}

	client.close();
	console.log("disconnected!");
};

// Get all reviews. ----------------------------------------------------------------------

const getAllReviews = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();

		const db = client.db("FindMyCrypto");

		const result = await db.collection("reviews").find().toArray();

		result
			? res.status(200).json({ status: 200, data: result })
			: res.status(404).json({ status: 404, data: "Reviews not found." });
	} catch {
		res.status(500).json({
			status: 500,
			message: "Something went wrong, please try again later.",
		});
	} finally {
		client.close();
	}
};

// Get a review by its Id. ----------------------------------------------------------------------

const getReviewById = async (req, res) => {
	const { id } = req.params;

	const client = new MongoClient(MONGO_URI, options);
	try {
		await client.connect();
		const db = client.db("FindMyCrypto");

		const result = await db.collection("reviews").findOne({ atmId: id });

		result
			? res.status(200).json({ status: 200, data: result })
			: res.status(404).json({ status: 404, data: "Review not found" });
	} catch (err) {
		res.status(500).json({
			status: 500,
			message: "Something went wrong, please try again later.",
		});
	} finally {
		client.close();
	}
};

// Allow visitors to add a review to the ATM's. ----------------------------------------------------------------------

const addReview = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	const { atm_Id } = req.params;

	const { review, firstName, email } = req.body; //email is going to be given through POST

	if (!review) {
		res.status(400).json({
			status: 400,
			message: "Missing information, please fill input fields.",
		});

		try {
			//generate id
			const id = uuidv4();

			// connect to the client
			await client.connect();

			// connect to the database (the one created in Mongo)
			const db = client.db("FindMyCrypto");
			console.log("connected!");

			await db
				.collection("reviews")
				.insertOne({ reviewId: id, review, atmId: atm_Id, firstName });

			const query = { email };
			// console.log(query);
			const newValues = {
				$push: { reviews: id },
			};

			await db.collection("users").updateOne(query, newValues);

			res
				.status(200)
				.json({ status: 200, message: "Success", data: { id, ...req.body } });
		} catch (err) {
			console.log(err);
			res
				.status(500)
				.json({ status: 500, data: err, message: "Internal Server Error" });
		}

		// close the connection to the database server
		client.close();
		console.log("disconnected!");
	}
};

// Login validation done here. ----------------------------------------------------------------------
const handleLogin = async (req, res) => {
	const { email } = req.params;

	const client = new MongoClient(MONGO_URI, options);
	try {
		await client.connect();
		const db = client.db("FindMyCrypto");

		const user = await db.collection("users").findOne({ email: email });

		if (user) {
			return res.status(200).json({
				status: 200,
				data: user,
				message: "User already signed-up.",
			});
		} else {
			return res.status(404).json({
				status: 404,
				message:
					"User not found, please fill up the following information to continue!",
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: 500,
			message: "Something went wrong, please try again.",
		});
	} finally {
		client.close();
	}
};

// Get all the users from MongoDB. ----------------------------------------------------------------------

const getAllUsers = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();

		const db = client.db("FindMyCrypto");

		const result = await db.collection("users").find().toArray();

		result
			? res.status(200).json({ status: 200, data: result })
			: res.status(404).json({ status: 404, data: "Users not found." });
	} catch {
		res.status(500).json({
			status: 500,
			message: "Something went wrong, please try again later.",
		});
	} finally {
		client.close();
	}
};

// Get user by ID from MongoDB. ----------------------------------------------------------------------

const getUserById = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);
	const { email } = req.params;

	try {
		await client.connect();

		const db = client.db("FindMyCrypto");

		const result = await db.collection("users").findOne({ email });

		result
			? res.status(200).json({ status: 200, data: result })
			: res.status(404).json({ status: 404, data: "Users not found." });
	} catch {
		res.status(500).json({
			status: 500,
			message: "Something went wrong, please try again later.",
		});
	} finally {
		client.close();
	}
};

// Post new user to MongoDB after sign-up process is successful. ----------------------------------------------------------------------
const addUser = async (req, res) => {
	const id = uuidv4();

	const { firstName, lastName, email, type, btcWallet } = req.body;

	if (!firstName || !lastName || !type || !btcWallet) {
		res.status(400).json({
			status: "error",
			message: "Some info is missing, please fill all fields.",
		});
	}

	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		const db = client.db("FindMyCrypto");

		let newUser = await db.collection("users").insertOne({ ...req.body, id });

		res.status(200).json({ status: 200, data: newUser });
	} catch (err) {
		console.log(err),
			res.status(500).json({
				status: 500,
				message: "Something went wrong, please try again later.",
			});
	} finally {
		client.close();
	}
};

//////////////////////////////////////////////////////////////////////////////////
module.exports = {
	getAllLocations,
	getLocationById,
	addLocation,
	deleteLocation,
	getAllReviews,
	getReviewById,
	addReview,
	handleLogin,
	getAllUsers,
	getUserById,
	addUser,
};
////////////////////////////////////////////////////////////////////////////////////
