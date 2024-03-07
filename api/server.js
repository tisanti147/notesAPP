require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');


mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
app.use(cors());

const notesRouter = require('./routes/notes');
app.use('/notes', notesRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});