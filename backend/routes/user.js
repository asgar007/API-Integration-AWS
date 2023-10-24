const express = require('express');
const router = express.Router();
const { User } = require('../modals/userVendor'); // Import User model
const Job  = require('../modals/job');

// User Registration
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // const newUser = new User({ username, email, password });
    // await newUser.save();
    await User.create({ username, email, password })
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// User Login (Implement authentication logic here)
router.post('/validate', async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email: email}).exec();
    if(!user || user.password != password){
      return res.status(422).json({
          message: "Invalid username or password"
      })
  }
    return res.status(200).json({
      message: "logged in successfully"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

router.post('/jobs', async (req, res) =>{
  try {
    const { title, company, location, description, requirements } = req.body;
    await Job.create({ title, company, location, description, requirements });
    res.status(201).json({ message: 'Job registered successfully' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
})

router.get('/alljobs', async (req, res)=>{
  try {
    const jobs = await Job.find();
    if(req.query.search){
      const filteredJobs = jobs.filter(job=>{
        return (
        job.title.includes(req.query.search)||
        job.company.includes(req.query.search) ||
        job.location.includes(req.query.search) ||
        job.requirements.includes(req.query.search) ||
        job.description.includes(req.query.search)
        );
      })
      res.status(200).json(filteredJobs);
      return;
    }
    res.status(200).json(jobs);
    
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

module.exports = router;
