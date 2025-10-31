const mqtt = require('mqtt');
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project.firebaseio.com'
});

const db = admin.database();
const client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', () => {
  client.subscribe('aqi/data');
});

client.on('message', (topic, message) => {
  const data = JSON.parse(message.toString());
  db.ref('aqi').push(data);
});