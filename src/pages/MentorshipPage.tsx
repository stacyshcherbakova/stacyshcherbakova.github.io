import { mentorship } from '../data/content';

export function MentorshipPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">Mentorship</p>
      <h2>Mentorship & Community</h2>
      <p>{mentorship.intro}</p>

      <div className="stack-list">
        {mentorship.roles.map((role) => (
          <section className="item-card" key={role.title}>
            <p className="item-heading">{role.title}</p>
            <p className="muted-line">{role.org} · {role.dates}</p>
            <p>{role.description}</p>
          </section>
        ))}
      </div>
    </section>
  );
}
