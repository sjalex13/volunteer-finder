import { useState, useEffect } from 'react';
import axios                   from 'axios';
import OpportunityCard         from '../components/OpportunityCard';

export default function Opportunities() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('/api/opportunities').then(r => setList(r.data));
  }, []);

  return (
    <div>
      <br />
      <h2>All Opportunities</h2>
      {list.map(o => <OpportunityCard key={o.id} {...o}/>)}
    </div>
  );
}
