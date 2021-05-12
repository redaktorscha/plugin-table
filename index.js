import express from 'express';
import appSrc from './back/app.js';
import cors from './back/cors.js';
import path from 'path';
import errorHandler from './back/errorHandler.js';
import headers from './back/headers.js';


const app = appSrc(express, cors, path, errorHandler, headers);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}, PID: ${process.pid}`);
})