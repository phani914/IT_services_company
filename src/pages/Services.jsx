import "./Services.css";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description:
      "Scalable cloud migration, deployment, and infrastructure management to improve business agility.",
  },
  {
    icon: "🌐",
    title: "Networking",
    description:
      "Reliable network architecture, implementation, monitoring, and optimization for secure connectivity.",
  },
  {
    icon: "🛡️",
    title: "Cyber Security",
    description:
      "Protect your business with advanced threat detection, endpoint security, and compliance solutions.",
  },
  {
    icon: "💻",
    title: "Software Development",
    description:
      "Custom web and enterprise applications built to streamline operations and enhance productivity.",
  },
  {
    icon: "🖥️",
    title: "Managed IT Services",
    description:
      "Comprehensive IT management with proactive monitoring, maintenance, and infrastructure support.",
  },
  {
    icon: "🎧",
    title: "24/7 IT Support",
    description:
      "Dedicated technical support ensuring maximum uptime and uninterrupted business operations.",
  },
];

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h4>OUR SERVICES</h4>

        <h1>
          Innovative IT Solutions
          <br />
          For Modern Businesses
        </h1>

        <p className="subtitle">
          We provide end-to-end technology solutions that help organizations
          improve efficiency, strengthen security, and accelerate digital
          transformation.
        </p>

        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;