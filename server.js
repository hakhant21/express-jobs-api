const express = require('express');
const mongoose = require('mongoose');

const jobRoute = require('./routes/jobs.js');

const app = express();

app.use(express.json());
app.use('/api/jobs', jobRoute);

const dbURI = 'mongodb+srv://hakhant21:<password>@api.fw10l.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
        .then(result => console.log('Connected To Database...'))
        .catch(err => console.log('Connection Error,Please Try Again', err));

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
});
