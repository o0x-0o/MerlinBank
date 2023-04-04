import { createServer } from "./server";
import { mongooConnect } from "./mongo";

const PORT = process.env.MERLIN_PORT || 3000;

async function start() {
	const mongoose = await mongooConnect();
	const app = createServer({
		mongoose
	});

	app.listen(PORT);

	console.log(`MerlinBank started at port ${PORT}`);
}
