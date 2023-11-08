const { MongoClient } = require("mongodb");

async function main() {
	// const uri = "mongodb+srv://acrisanto:0cOrUxE8JmLYvS0b@clustercse341.f5jfava.mongodb.net/?retryWrites=true&w=majority";
	const uri = "mongodb://localhost:27017/";

	const client = new MongoClient(uri);
	try {
		await client.connect();
		await listDatabases(client);
	} catch (error) {
		console.log(error);
	} finally {
		await client.close();
	}
}

async function listDatabases(client) {
	const dbList = await client.db().admin().listDatabases();

	console.log("Databases");
	dbList.databases.forEach((db) => {
		console.log(`-${db.name}`);
	});
}

main().catch(console.error);
