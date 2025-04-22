import { Routes, Route } from 'react-router-dom';
import Navbar            from './components/Navbar';
import Home              from './pages/Home';
import RegisterVolunteer from './pages/RegisterVolunteer';
import Opportunities     from './pages/Opportunities';
import PostOpportunity   from './pages/PostOpportunity';
import ApplyOpportunity  from './pages/ApplyOpportunity';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/register"    element={<RegisterVolunteer />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/post"        element={<PostOpportunity />} />
        <Route path="/apply"       element={<ApplyOpportunity />} />
      </Routes>
    </>
  );
}
