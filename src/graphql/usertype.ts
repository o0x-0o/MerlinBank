import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import UserModel from "../model/user";

const UserType = new GraphQLObjectType<UserModel>({
	name: "User",
	fields: () => ({
		id: {
			type: new GraphQLNonNull(GraphQLString),
			resolve: (user) => user.snowflakeId
		},
		mana: {
			type: new GraphQLNonNull(GraphQLString),
			resolve: (user) => user.mana
		}
	})
});

export default UserType;
