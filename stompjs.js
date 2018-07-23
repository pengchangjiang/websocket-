const Stomp = require('stompjs');
//一直没有成功;
//klass = Stomp.WebSocketClass || WebSocket; 报错 WebSocket is not defined
var client = Stomp.client('ws://219.234.147.220:61623');

client.connect({}, (e) => {
    console.log('成功连接');
}, (e) => {
    console.log('失败')
})