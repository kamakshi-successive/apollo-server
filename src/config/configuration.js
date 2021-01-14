import { config } from 'dotenv';

config();
const envVars = process.env;
const configuration = Object.freeze({
    port: envVars.PORT,
    nodeEnv: envVars.NODE_ENV,
    mongoUrl: envVars.MONGO_URL
});

export default configuration;

