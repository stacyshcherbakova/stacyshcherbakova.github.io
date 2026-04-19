import { site } from '../data/content';

export function AboutPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">About</p>
      <h2>Welcome!</h2>
      <p>{site.intro}</p>

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
