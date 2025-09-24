import { connection, statusConnection } from './database/connection.js';
import { getStatusApp, resetDatabase } from './database/app.js';
function start() {
    connection({ ip: '127.0.0.1', name: 'localhost' });
}

start();

statusConnection();

getStatusApp();

resetDatabase();
