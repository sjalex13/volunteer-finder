import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/register"> Register</Link> | 
      <Link to="/opportunities"> Opportunities</Link> | 
      <Link to="/post"> Post</Link> | 
      <Link to="/apply"> Apply</Link>
    </nav>
  );
}
