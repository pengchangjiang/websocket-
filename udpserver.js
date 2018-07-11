var dgram = require('dgram');
var port = '8060';
//服务端
var server = dgram.createSocket('udp4');
server.on('listening', () => {
    console.log('server启动......');
})
server.on('message', function (msg, rinfo) {
    console.log("server", msg);
    server.send('I am server.', rinfo.port, rinfo.address);
    // rinfo.address
    // rinfo.port
});
server.bind(port);