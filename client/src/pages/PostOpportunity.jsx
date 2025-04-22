import { useState } from 'react';
import axios         from 'axios';

export default function PostOpportunity() {
  const [f, setF] = useState({ title:'',location:'',description:'' });

  const submit = async e => {
    e.preventDefault();
    await axios.post('/api/opportunities', f);
    alert('Posted!');
    setF({ title:'',location:'',description:'' });
  };

  return (
    <form onSubmit={submit}>
      <h2>Post Opportunity</h2>
      <input placeholder="Title"       value={f.title}       onChange={e=>setF({...f,title:e.target.value})} required/>
      <input placeholder="Location"    value={f.location}    onChange={e=>setF({...f,location:e.target.value})} required/>
      <textarea placeholder="Description" value={f.description} onChange={e=>setF({...f,description:e.target.value})} required/>
      <button type="submit">Submit</button>
    </form>
  );
}
