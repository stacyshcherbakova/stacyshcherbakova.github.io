import { site } from '../data/content';

export function AboutPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">About</p>
      <h2>Welcome!</h2>
      <p>{site.intro}</p>
      <p>
        <strong>
          Interested in building AI Scientists and Robot Scientists to accelerate scientific discovery, while also exploring how AI can partially automate web-based research and operational workflows.
        </strong>
      </p>

      <div className="stack-list">
        <section className="item-card">
          <strong>Currently</strong>
          <p>{site.currently}</p>
        </section>

        <section className="item-card">
          <strong>Interests</strong>
          <p>{site.interests}</p>
        </section>
      </div>
    </section>
  );
}
