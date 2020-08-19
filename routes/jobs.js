const express = require('express');
const Job = require('../models/Job');

// Init Express Router
const router = express.Router();

// Get All Job
router.get('/', async(req , res, next)=>{
    const jobs = await Job.find({});
  try {
    res.json(jobs).status(200);
  }catch(err){
    next(err)
    res.status(500).send('Connection Error');
  }
})

// Create Job
router.post('/', async(req, res, next)=>{
  const job = await Job.create(req.body);
  try{
    await job.save();
    res.json(job).status(201);
  }catch(err){
    next(err);
    res.status(500).send('Connection Error');
  }
})

// Get Single Job
router.get('/:id', async(req, res, next)=>{
  try{
    const job = await Job.findById(req.params.id);
    res.json(job).status(200);
  }catch(err){
    next(err);
    res.status(500).send('Connection Error');
  }
})
// Update Job
router.patch('/:id', async(req, res, next)=>{
  try{
    const job = await Job.findByIdAndUpdate(req.params.id, req.body)
    await Job.save(job);
    res.json(job)
  }catch(err){
    next(err);
    res.status(500).send('Connection Error');
  }
})
// Delete Job
router.delete('/:id', async(req, res, next)=>{
    try{
      const job = await Job.findByIdAndDelete(req.params.id)
      if(!job) res.status(404).send('No Job Found')
      res.status(200).json(job);
    }catch(err){
      next(err)
      res.status(500).send('Connection Error');
    }
})

module.exports = router;
