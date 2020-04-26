import { Request, Response } from 'express'
import {ILog,JsonLogger} from '../../utils/AppLogger';

const loggerMiddleware = (req: Request, resp: Response, next) => {

    JsonLogger.info({'Content':'Logger Middleware', method :req.method, path:req.path})
    next();
}

export default loggerMiddleware