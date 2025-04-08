// src/components/AboutUsSection.tsx
import './css/AboutUsSection.css';

export default function AboutUsSection() {
  return (
    <section id="about-us" className="about-us-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/assets/img/about-dreamzcricket.jpg"
              alt="About DreamzCricket"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="section-title mb-3">
              About <span className="highlight">DreamzCricket</span>
            </h2>
            <p className="lead">
              <span className="highlight">DreamzCricket</span> is a thrilling fantasy cricket platform crafted for cricket lovers who want to go beyond just watching.
            </p>
            <p>
              Users can <span className="highlight">select real players</span>, <span className="highlight">build fantasy teams</span>, and <span className="highlight">win real cash</span> based on live performances.
            </p>
            <p>
              But that's not all — we also offer two exciting and unique contest formats:
            </p>

            <ul className="about-contests list-unstyled">
              <li className="mb-3">
                <strong className="highlight">🏏 Predict the Match & Win:</strong> Users can guess the match outcome before it starts. Predict right and earn instant rewards!
              </li>
              <li className="mb-3">
                <strong className="highlight">🧠 Cricket Quiz Challenge:</strong> A fun quiz where users pick players they think will excel in <span className="highlight">batting</span>, <span className="highlight">bowling</span>, <span className="highlight">fielding</span>, <span className="highlight">all rounder</span>, or <span className="highlight">keeping</span>. Smart picks mean more points!
              </li>
            </ul>

            <p>
              <span className="highlight">DreamzCricket</span> delivers an all-in-one cricket experience — exciting, rewarding, and always evolving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
