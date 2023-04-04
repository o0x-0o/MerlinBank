import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "garphql";

import SpellCastModel from "../model/spellcast";

const SpellCastType = new GraphQLObjectType<SpellCastModel>({
	name: "SpellCast",
	fields: () => ({
		snowflakeId: {
			type: new GraphQLNonNull(GraphQLString),
			resolve: (cast) => cast.snowflakeId
		},
		user: {
			type: new GraphQLNonNull(GraphQLString),
			resolve: (cast) => cast.user
		},
		spell: {
			type: new GraphQLNonNull(GraphQLString),
			resolve: (cast) => cast.spell
		}
	})
});

export default SpellCastType;
