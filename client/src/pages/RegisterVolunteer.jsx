import { useState } from 'react';
import axios         from 'axios';

export default function RegisterVolunteer() {
  const [f, setF] = useState({ name:'',email:'',location:'' });

  const submit = async e => {
    e.preventDefault();
    await axios.post('/api/volunteers', f);
    alert('Registered!');
    setF({ name:'',email:'',location:'' });
  };

  return (
    <form onSubmit={submit}>
      <h2>Register Volunteer</h2>
      <input placeholder="Name"     value={f.name}     onChange={e=>setF({...f,name:e.target.value})} required/>
      <input placeholder="Email"    value={f.email}    onChange={e=>setF({...f,email:e.target.value})} required/>
      <input placeholder="Location" value={f.location} onChange={e=>setF({...f,location:e.target.value})} required/>
      <button type="submit">Submit</button>
    </form>
  );
}
