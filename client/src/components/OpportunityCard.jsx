export default function OpportunityCard({ title, location, description }) {
  return (
    <div className="opportunity-card">
      <h3>{title}</h3>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>
    </div>
  );
}
