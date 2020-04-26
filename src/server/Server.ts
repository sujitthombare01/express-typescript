import express from 'express';
import {Application} from 'express';
import {Log,JsonLogger} from '../utils/AppLogger';

export class Server {

    app: Application;
    port: number;
    log: Log;

    constructor(port: number = 3000){
        this.app = express();
        this.port= port;
        this.log = JsonLogger;
    }

    start() :void {
        this.app.listen(this.port, () => {
            this.log.info(`App listening on the http://localhost:${this.port}`)
        })
    }

}