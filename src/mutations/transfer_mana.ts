import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import uidGenerator from "../snowflake";
import MerlinContext from "../graphql/merlin_context";

import UserModel from "../model/user";
import TransferModel from "../model/transfer";

type TransferManaArgs = {
	readonly toUser: string,
	readonly amount: number
};

export const transferManaMutation = mutationWithClientMutationId({
	name: "TransferMana",
	inputFields: {
		toUser: {type: new GraphQLNonNull(GraphQLString)},
		amount: {type: new GraphQLNonNull(GraphQLString)}
	},
	outputFields: () => ({
		transfer: {
			type: new GraphQLNonNull(ManaTransferType),
			resolve: ({ transfer }) => transfer
		}
	}),
	mutateAndGetPayload: async (args: TransferManaArgs, ctx: MerlinContext) => {
		const { toUser, amount } = args;

		// TODO: await transferManaSchema

		if (ctx.user.snowflakeId === toUser) {
			throw Error("You cannot send mana to yourself");
		}
		if (ctx.user.mana < amount) {
			throw Error("You do not have enough mana to transfer");
		}

		const user = await UserModel.findOne({ snowflakeId: toUser });

		user.mana += amount;
		ctx.user.mana -= amount;
		await user.save();

		let transfer = new TransferModel({
			snowflakeId: uidGenerator.getUniqueID().toString(),
			fromUser: ctx.user.snowflakeId,
			toUser: toUser,
			amount: amount
		});

		await transfer.save();

		return { transfer };
	}
});
