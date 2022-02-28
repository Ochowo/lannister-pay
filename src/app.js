import express from 'express';
import bodyParser from 'body-parser';
import router from './route';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
process.env.DEBUG = '*';
app.use(bodyParser.json());
app.use('/api/v1', router);
app.get('/', (req, res) => {
  res.json({ message: 'Server is running :D' });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
