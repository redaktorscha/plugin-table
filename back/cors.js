/**
 * @module cors.js
 */

/**
 * @typedef {Object} cors - cors for express app
 */

export default {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,DELETE,PUT,OPTIONS",
    "Access-Control-Expose-Headers": "X-Resp,Content-Type, Accept, Access-Control-Allow-Headers, Access-Control-Expose-Headers",
    "Access-Control-Allow-Headers": "X-Resp,Content-Type, Accept, Access-Control-Allow-Headers, Access-Control-Expose-Headers"
}