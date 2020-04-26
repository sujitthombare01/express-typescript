import Logger from 'node-json-logger';
import {Log} from '../interfaces/Log';

class AppLogger {
    
    appLogger: Log;

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

export { JsonLogger , Log };
