import { createLogger } from "../utils/logger.js";
import { Connect } from "./Config.js";

const log=createLogger("mogrations")

export class Migrations{
    static async migrate(){
        try {
            const db=await Connect()

            await db.createCollection("products")
            await db.createCollection("inventory")
            await db.createCollection("suppliers")
            
            log("colecciones creadas")
        } catch (error) {
            log("error creando colecciones: ", error)
        }
    }
}