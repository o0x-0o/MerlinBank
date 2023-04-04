import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import SpellModel from "../model/transfer";

const SpellType = new GraphQLObjectType<SpellModel>({
	name: "Spell",
	fields: () => ({
		snowflakeId: {
			type: new GraphQLNonNull(GraphQLString),
			resolve: (spell) => spell.snowflakeId
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			resolve: (spell) => spell.name
		},
		description: {
			type: new GraphQLNonNull(GraphQLString),
			resolve: (spell) => spell.description
		},
		cost: {
			type: new GraphQLNonNull(GraphQLString),
			resolve: (spell) => spell.cost
		}
	})
});

export default SpellType;
