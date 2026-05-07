const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;
const INSTANCE = process.env.INSTANCE || 'default';
const HOSTNAME = os.hostname();

app.get('/', (req, res) => {
  res.json({
    instance: INSTANCE,
    hostname: HOSTNAME,
    message: 'Hola desde Express prueba rama test 2, ahora desde github',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', instance: INSTANCE });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[${INSTANCE}] Servidor corriendo en puerto ${PORT}`);
});
