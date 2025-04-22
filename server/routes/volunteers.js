const express = require('express');
const router  = express.Router();
const pool    = require('../db');

router.post('/', async (req, res) => {
  const { name, email, location } = req.body;
  if (!name || !email || !location) {
    return res.status(400).json({ error: 'Name, email, location required' });
  }
  try {
    const { rows } = await pool.query(
      `INSERT INTO volunteers (name,email,location) VALUES($1,$2,$3) RETURNING *`,
      [name, email, location]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error registering volunteer' });
  }
});

router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM volunteers');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error fetching volunteers' });
  }
});

router.post('/apply', async (req, res) => {
  const { volunteer_id, opportunity_id } = req.body;
  if (!volunteer_id || !opportunity_id) {
    return res.status(400).json({ error: 'volunteer_id & opportunity_id required' });
  }
  try {
    await pool.query(
      `INSERT INTO volunteer_opportunities (volunteer_id, opportunity_id) VALUES ($1,$2)`,
      [volunteer_id, opportunity_id]
    );
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error applying to opportunity' });
  }
});

router.get('/applications', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT v.name AS volunteer, o.title AS opportunity
      FROM volunteer_opportunities vo
      JOIN volunteers v    ON vo.volunteer_id   = v.id
      JOIN opportunities o ON vo.opportunity_id = o.id
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error fetching applications' });
  }
});

module.exports = router;
