const { MongoClient } = require("mongodb");
let fs = require("file-system");

const users = JSON.parse(fs.readFileSync("./data/users.json"));
// const locations = JSON.parse(fs.readFileSync("./data/locations.json"));
const reviews = JSON.parse(fs.readFileSync("./data/reviews.json"));

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const batchImport = async () => {
	const client = new MongoClient(MONGO_URI, options);
	try {
		await client.connect();

		const db = client.db("FindMyCrypto");
		console.log("connected!");

		// add this to the collection
		// await db.collection("locations").insertMany(locations);
		await db.collection("users").insertMany(users);
		await db.collection("reviews").insertMany(reviews);

		client.close();
		console.log("success");
	} catch (err) {
		console.log(err);
	}
};

batchImport();
