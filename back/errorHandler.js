/**
 * @module errorHandler.js
 */

/**
 * handler for non-404 errors
 * @param {Error} e 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next
 */

 import headers from './headers.js';

 const errorHandler = (e, req, res, next) => {
     console.log(e.code, e.stack);
     res
     .status(500)
     .set(headers)
     .send(`Error: ${res.statusCode}`)
 };
 export default errorHandler;