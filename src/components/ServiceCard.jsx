import "./ServiceCard.css";

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="icon">{service.icon}</div>

      <h2>{service.title}</h2>

      <p>{service.description}</p>

      <button>Learn More →</button>
    </div>
  );
}

export default ServiceCard;