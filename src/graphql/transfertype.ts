import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import TransferModel from "../model/transfer";

const ManaTransferType = new GraphQLObjectType<TransferModel>({
	name: "ManaTransfer",
	fields: () => ({
		id: {
			type: new GraphQLNonNull(GraphQLString),
			resolve: (transfer) => transfer.snowflakeId
		},
		fromUser: {
			type: new GraphQLNonNull(GraphQLString),
			resolve: (transfer) => transfer.fromUser
		},
		toUser: {
			type: new GraphQLNonNull(GraphQLString),
			resolve: (transfer) => transfer.toUser
		},
		amount: {
			type: new GraphQLNonNull(GraphQLString),
			resolve: (transfer) => transfer.amount.toString()
		}
	})
});

export default ManaTransferType;
