import mongoose from "mongoose";

type SpellCastModel = {
	readonly snowflakeId: string,
	readonly user: string,
	readonly spell: string
};

export const spellCastSchema = new mongoose.Schema<SpellCastModel>({
	snowflakeId: {type: String, required: true},
	user: {type: String, required: true},
	spell: {type: String, required: true}
});

const SpellCastModel = mongoose.model<SpellCastModel>("SpellCast", spellCastSchema);

export default SpellCastModel;
