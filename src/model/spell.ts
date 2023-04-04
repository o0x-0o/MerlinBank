import mongoose from "mongoose";

type SpellModel = {
	readonly snowflakeId: string,
	name: string,
	description: string,
	cost: number,
};

export const spellSchema = new mongoose.Schema<SpellModel>({
	snowflakeId: {type: String, required: true},
	name: {type: String, required: true},
	description: {type: String, required: true},
	cost: {type: Number, required: true}
});

const SpellModel = mongoose.model<SpellModel>("Spell", spellSchema);

export default SpellModel;
