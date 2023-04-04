import { GraphQLObjectType } from "graphql";

import { buySpellMutation } from "../mutations/buy_spell";
import { sellSpellMutation } from "../mutations/sell_spell";
import { castSpellMutation } from "../mutations/cast_spell";
import { transferManaMutation } from "../mutations/transfer_mana";

const mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: () => ({
		transferMana: transferManaMutation,
		buySpell: buySpellMutation,   // TODO
		sellSpell: sellSpellMutation, // TODO
		castSpell: castSpellMutation
	})
});

export default mutation;
