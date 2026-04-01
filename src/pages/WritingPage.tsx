import { writing } from '../data/content';

export function WritingPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">Blog</p>
      <h2>Posts, notes, and thoughts</h2>
      <p>
        This page can grow into a blog space for thoughts on research software, machine learning,
        biology, debugging, and building tools that are actually useful.
      </p>

      <div className="stack-list">
        {writing.map((entry) => (
          <article key={entry.title} className="item-card">
            <strong>{entry.title}</strong>
            <p className="muted-line">{entry.date}</p>
            <p>{entry.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
