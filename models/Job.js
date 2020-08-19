const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {
      type: String,
      requried: true
    },
    description: {
      type: String
    },
    salary: {
      type: Number,
      required: true
    }
})

const Job = mongoose.model('job', jobSchema);

module.exports = Job;
