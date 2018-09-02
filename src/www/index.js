import { createServer as cS } from "http";
import app from '../';

function normalizePort(num) {
    let port = parseInt(num,10);
    if(isNaN(port)) return num
    if(port >= 0) return port
    return false
}

function onError(error){
    if(error.syscall !== 'listen') throw error
    let bind = typeof port === 'string' ? 'Pipe' + port : 'Port' + port;
    switch(error.code){
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
        break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
        break;
        default:
            throw error;
    }
}
function onListening(){
    let addr = server.address();
    let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.debug(`http://${addr.address}:${addr.port}/api/v1`)
}

let port = normalizePort(process.env.PORT || 3001)
app.set('port', port);
let server = cS(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
