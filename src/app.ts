import { Server } from './server/Server';
import * as bodyParser from 'body-parser'
import loggerMiddleware from './server/middlewares/RequestLogger';
import { HomeController } from './server/routes/HomeController';

const server = new Server({
    port: 3000,
    controllers :[
        new HomeController('/')
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
});
server.start();


