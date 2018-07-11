
var clients = [];
function conect(i) {
    var client = new WebSocket('ws://localhost:3000', 'ws');

    client.onopen = function () {
        client.send('发送数据' + i);
    }
    client.onmessage = function (e) {
        console.log(i, '收到', e.data);
    }
    client.onclose = function (e) {
        console.log(i, '关闭');
    }
    clients.push(client);
}


function connects(count) {
    for (var i = 0; i < count; i++) {
        conect(i);

    }
}

function send() {
    clients.forEach(function (c, i) {
        c.send('button发送消息' + i);
    });
}