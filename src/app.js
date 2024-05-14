import express from "express";
import morgan from "morgan";
import { createLogger } from "./utils/logger.js";

const log = createLogger("app");

const app = express();
app.use(morgan("dev"));
app.set("x-powered-by", false);
app.use(express.json());

app.get("/", (req, res) => {
	log("que onda pai");
	res.json({
		res: "ok",
	});
});

app.use((req, res) => {
	res.json({
		res: `¿${req.url}? Mmm no se pai, nada nea estoy crochis porque tuki tuki muñeco al alma, como yo no salgo de aquí de Medellín itagui, poray al otro pai lado tal vez sí, pero cómo estoy aquí es crochis hermano y estoy vea.`,
	});
});

export default app;
