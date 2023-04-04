import mongoose from "mongoose";

type UserModel = {
	readonly snowflakeId: string,
	mana: number,
	spells: string[]
};

export const userSchema = new mongoose.Schema<UserModel>({
	snowflakeId: {type: String, required: true},
	mana: {type: Number, required: true},
	spells: {type: Array<String>, required: true}
});

const UserModel = mongoose.model<UserModel>("User", userSchema);

export default UserModel;
