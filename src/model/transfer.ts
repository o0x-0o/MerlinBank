import mongoose from "mongoose";

type TransferModel = {
	readonly snowflakeId: string,
	readonly fromUser: string,
	readonly toUser: string,
	readonly amount: number
};

export const transferSchema = new mongoose.Schema<TransferModel>({
	snowflakeId: {type: String, required: true},
	fromUser: {type: String, required: true},
	toUser: {type: String, required: true},
	amount: {type: Number, required: true}
});

const TransferModel = mongoose.model<TransferModel>("Transfer", transferSchema);

export default TransferModel;
