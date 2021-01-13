import { config } from 'dotenv';

config();
const envVars = process.env;
const configuration = Object.freeze({
    port: envVars.PORT,
    nodeEnv: envVars.nodeEnv
});

export default configuration;

