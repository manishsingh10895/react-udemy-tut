class ErrorHandler {
    /**
     * Handling Error and sending response to server
     * 
     * @param {Response} res 
     * @param {Object} err 
     * @param {Number} status 
     */
    static HandleError(res, err, status=400) {
        res.status(status).json(err);
    }
}

module.exports = ErrorHandler;