import express from 'express';
import {Application} from 'express';
import {ILog,JsonLogger} from '../utils/AppLogger';
import { IexpressApp } from 'interfaces/IExpressApp';
import { IControllerBase } from 'interfaces/IControllerBase';

export class Server {

    app: Application;
    port: number;
    log: ILog;

    constructor(appInit: IexpressApp){
        this.app = express();
        this.port= appInit.port;
        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
        this.log = JsonLogger;
    }

    private middlewares(middleWares: any[]) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: IControllerBase[]) {
        controllers.forEach(controller => {
            this.app.use(controller.path, controller.initRoutes())
        })
    }

    start() :void {
        this.app.listen(this.port, () => {
            this.log.info(`App listening on the http://localhost:${this.port}`)
        })
    }

}