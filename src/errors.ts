import Router from "@koa/router";

const handleErrors: Router.Middleware = async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		console.error(err);

		throw err;
	}
};

export { handleErrors };
