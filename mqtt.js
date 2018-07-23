const mqtt = require('mqtt');
var client = mqtt.connect('ws://172.16.100.250:61623', {
    username: 'admin',
    password: 'password'
});
client.on('connect', () => {
    client.subscribe('pre');
    client.subscribe('dtid_gps');
    // client.publish('pre', 'Hello mqtt');
    // client.publish('pre0', 'Hello mqtt');
});
client.on('message', (topic, message) => {
    console.log(topic);
    console.log(message.toString());
    // client.end();
});
client.on('error', (err) => {
    console.log(err);
});