import Logger from 'node-json-logger';
import {ILog} from '../interfaces/ILog';

class AppLogger {
    
    appLogger: ILog;

    private static instance:AppLogger;

    static getInstance(): AppLogger {
        if (!AppLogger.instance) {
            AppLogger.instance = new AppLogger();
            AppLogger.instance.appLogger = new Logger();
        }
    
        return AppLogger.instance;
      }
}

const appLoggerInstance = AppLogger.getInstance();
const JsonLogger =appLoggerInstance.appLogger

export { JsonLogger , ILog };
