export class BaseException extends Error {
    constructor(message,statusCode) {
        super(message);
        this.isException = true;
        this.statusCode = statusCode;
    }
}