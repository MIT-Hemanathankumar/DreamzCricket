import './css/StatsSection.css';

export default function StatsSection() {
  return (
    <section className="stats-section py-5 bg-light text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <h2 className="stat-number">4.8⭐</h2>
            <p className="stat-label">Average User Rating</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h2 className="stat-number">2 Million+</h2>
            <p className="stat-label">Registered Users</p>
          </div>
          <div className="col-md-4">
            <h2 className="stat-number">₹10 Crore+</h2>
            <p className="stat-label">Total Prize Money Won</p>
          </div>
        </div>
      </div>
    </section>
  );
}
