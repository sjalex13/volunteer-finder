import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <section className="hero" style={{
        textAlign: 'center',
        padding: '4rem 2rem',
        background: 'var(--surface)',
        borderRadius: '8px',
        margin: '2rem',
        boxShadow: '0 8px 16px rgba(0,0,0,0.6)'
      }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>
          Welcome to Local Volunteer Finder
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', margin: '1rem 0' }}>
          Empower your community by finding or posting volunteer opportunities near you.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <Link to="/opportunities" style={{
            marginRight: '1rem',
            padding: '0.75rem 1.5rem',
            background: 'var(--secondary)',
            color: 'var(--bg)',
            borderRadius: '4px',
            fontWeight: 600,
            textDecoration: 'none'
          }}>Browse Opportunities</Link>
          <Link to="/post" style={{
            padding: '0.75rem 1.5rem',
            background: 'var(--primary)',
            color: 'var(--bg)',
            borderRadius: '4px',
            fontWeight: 600,
            textDecoration: 'none'
          }}>Post Opportunity</Link>
        </div>
      </section>

      <section className="features" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '2rem' }}>
        <div className="feature-card" style={{
          flex: '1 1 250px',
          background: 'var(--surface)',
          margin: '1rem',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.6)'
        }}>
          <h3>Find Opportunities</h3>
          <p>Search through a variety of local events and causes that need your help.</p>
        </div>

        <div className="feature-card" style={{
          flex: '1 1 250px',
          background: 'var(--surface)',
          margin: '1rem',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.6)'
        }}>
          <h3>Post Events</h3>
          <p>Create and share volunteer opportunities to engage your community.</p>
        </div>

        <div className="feature-card" style={{
          flex: '1 1 250px',
          background: 'var(--surface)',
          margin: '1rem',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.6)'
        }}>
          <h3>Connect & Grow</h3>
          <p>Meet like-minded volunteers and grow your network while making a difference.</p>
        </div>
      </section>
    </main>
  );
}
