import UserModel from "../model/user";

type MerlinContext = {
	readonly user: UserModel | null,
	// TODO
};

export default MerlinContext;
