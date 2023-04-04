import Koa from "koa";

import { router } from "./routes";
import { handleErrors } from "./errors";

export function createServer(): Koa {
	const app = new Koa();

	const setupGraphql: Options = async (req) => {
		// TODO
	}
}
