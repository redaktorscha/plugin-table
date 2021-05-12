/**
 * @module app.js
 */

/**
 * express app
 * @param {Function} express - Express constructor
 * @param {Object} cors - CORS for express app
 * @param  {NodeModule} path - Nodejs path
 * @param {Function} errorHandler - handler for non-404 errors
 * @param {Object} headers - headers for express app
 * 
 * @returns Express app instance ready to work
 */

export default (express, cors, path, errorHandler, headers) => {

    const app = express();

    const __dirname = path.resolve();

    app
        .use((req, res, next) => {
            res
                .status(200)
                .set({
                    
                    ...cors
                });
            next();
        })

        .use(express.static( __dirname))

        .get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')))
        
        .use(errorHandler)


    return app;
}