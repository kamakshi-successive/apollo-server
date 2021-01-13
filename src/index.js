import schema from './modules';
import Server from './server';
import configuration from "./config";

const server = new Server(configuration);

{()=>{
    server.bootstrap().setupApollo(schema);
}}{};
