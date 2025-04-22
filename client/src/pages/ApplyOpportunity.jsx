import { useState, useEffect } from 'react';
import axios                   from 'axios';

export default function ApplyOpportunity() {
  const [vols, setVols] = useState([]);
  const [opps, setOpps] = useState([]);
  const [f, setF]       = useState({ volunteer_id:'', opportunity_id:'' });

  useEffect(() => {
    axios.get('/api/volunteers').then(r => setVols(r.data));
    axios.get('/api/opportunities').then(r => setOpps(r.data));
  }, []);

  const submit = async e => {
    e.preventDefault();
    await axios.post('/api/volunteers/apply', f);
    alert('Applied!');
    setF({ volunteer_id:'', opportunity_id:'' });
  };

  return (
    <form onSubmit={submit}>
      <h2>Apply to Opportunity</h2>
      <select value={f.volunteer_id} name="volunteer_id" onChange={e=>setF({...f,volunteer_id:e.target.value})} required>
        <option value="">Select Volunteer</option>
        {vols.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
      </select>
      <select value={f.opportunity_id} name="opportunity_id" onChange={e=>setF({...f,opportunity_id:e.target.value})} required>
        <option value="">Select Opportunity</option>
        {opps.map(o => <option key={o.id} value={o.id}>{o.title}</option>)}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
