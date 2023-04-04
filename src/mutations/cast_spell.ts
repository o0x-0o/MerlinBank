import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import uidGenerator from "../snowflake";
import MerlinContext from "../graphql/merlin_context";

type CastSpellArgs = {
	readonly spell: string
};

export const castSpellMutation = mutationWithClientMutationId({
	name: "CastSpell",
	inputFields: {
		spell: {type: new GraphQLNonNull(GraphQLString)}
	},
	outputFields: () => ({
		cast: {
			type: new GraphQLNonNull(CastSpellType),
			resolve: ({ cast }) => cast
		}
	}),
	mutateAndGetPayload: async (args: CastSpellArgs, ctx: MerlinContext) => {
		const { spellId } = args;
		const spell = SpellModel.findOne({ snowflakeId: spellId });

		if (ctx.user.mana < spell.cost) {
			throw Error("You do not have enough mana to cast this spell");
		}

		ctx.user.mana -= spell.cost;

		let cast = new SpellCastModel({
			snowflakeId: uidGenerator.getUniqueID().toString(),
			user: ctx.user.snowflakeId,
			spell: spell.snowflakeId
		});

		await cast.save();

		return { cast };
	}
});
