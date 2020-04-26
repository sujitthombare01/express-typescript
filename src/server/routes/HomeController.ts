import { IControllerBase } from "interfaces/IControllerBase";
import express , { Request, Response }  from 'express';

export class HomeController implements IControllerBase {
    path: string;
    constructor(path){
        this.path = path
    }
    initRoutes() {
        const router = express.Router();
        router.get(this.path, this.index)
        return router;
    }
    index(req: Request, res: Response) {
        res.send('App is Working');
    }
}