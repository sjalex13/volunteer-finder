const express = require('express');
const router  = express.Router();
const pool    = require('../db');

router.post('/', async (req, res) => {
  const { title, location, description } = req.body;
  if (!title || !location) {
    return res.status(400).json({ error: 'Title & location required' });
  }
  try {
    const { rows } = await pool.query(
      `INSERT INTO opportunities (title,location,description)
       VALUES($1,$2,$3) RETURNING *`,
      [title, location, description || '']
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error creating opportunity' });
  }
});

router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM opportunities');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error fetching opportunities' });
  }
});

module.exports = router;
