import { server } from './server/Server';

server.listen(process.env.PORT_BACKEND || 8080, () => console.log("Server ON!!! { º__º }"));
    