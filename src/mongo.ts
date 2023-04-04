import mongoose from "mongoose";

export async function mongoConnect(): Promise<mongoose.Mongoose> {
	return await mongoose.connect(process.env.MERLIN_MONGOURL);
}
