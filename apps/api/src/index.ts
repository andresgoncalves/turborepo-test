import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send(req.query.message || 'Hello world!');
});

app.listen(3000, () => {
  console.log('✅ Server started');
});

export default app;
