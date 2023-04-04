import { GraphQLFieldConfig } from 'graphql/type';

import UserType from "./usertype";
import MerlinContext from "./merlin_context";

export const meQuery: GraphQLFieldConfig<any, MerlinContext> = {
	type: UserType,
	description: "Get current user",
	resolve: (_root, _args, ctx) => ctx.user
};
