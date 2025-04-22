const express = require('express');
const cors    = require('cors');
require('dotenv').config();

const volunteers   = require('./routes/volunteers');
const opportunities = require('./routes/opportunities');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/volunteers',   volunteers);
app.use('/api/opportunities', opportunities);

app.get('/', (req, res) => res.send('Volunteer Finder API'));
app.use((req, res) => res.status(404).send('Not found'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
