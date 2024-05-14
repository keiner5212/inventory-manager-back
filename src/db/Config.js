import { MongoClient } from "mongodb";
import { createLogger } from "../utils/logger.js";
import { config } from "dotenv";
config();

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGO_DB_NAME;

const log = createLogger("db");

export async function Connect() {
	const client = new MongoClient(uri);
	try {
		await client.connect();
		log("Conexion exitosa");
		return client.db(dbName);
	} catch (error) {
		log(
			"hey esa base de datos estaaa... como los servidores de la unimag, no vale ni monda"
		);
	}
}
