import app from "./src/app.js";
import { Migrations } from "./src/db/Migrations.js";
import { createLogger } from "./src/utils/logger.js";
import { config } from "dotenv";
config();

const log = createLogger("server");

app.listen(process.env.PORT, async () => {
	await Migrations.migrate();
	log("hey valemia, ya inicio, prueba entrando a http://127.0.0.1:8080/");
});