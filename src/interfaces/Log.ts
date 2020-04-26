export interface Log {
    info(...message: any): void;
    trace(...message: any): void;
    debug(...message: any): void;
    warn(...message: any): void;
    error(...message: any): void;
    fatal(...message: any): void;
}