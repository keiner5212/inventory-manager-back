import Debug from "debug";
Debug.enable("*");

export const createLogger = (name = "app") => {
	return Debug(name);
};
