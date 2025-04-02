export const ErrorHandlerMiddleware = (error,_,response,__) => {
    if (error.isException) {
        response.status(error.statusCode).send({
            message: error.message
        });
    } else {
        console.error(error);
        response.status(500).send({
            message: "Server Error"
        });
    }   
}