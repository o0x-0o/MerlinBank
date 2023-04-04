import { Snowflake } from "nodejs-snowflake";

const uidGenerator = new Snowflake({
	custom_epoch: 1617499753
});

export default uidGenerator;
