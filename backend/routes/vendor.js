const express = require('express');
const router = express.Router();
const { Vendor } = require('../modals/userVendor'); // Import Vendor model

// Vendor Registration
router.post('/register', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newVendor = new Vendor({ name, email });
    await newVendor.save();
    res.status(201).json({ message: 'Vendor registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
