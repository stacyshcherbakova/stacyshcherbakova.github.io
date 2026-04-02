import { writing } from '../data/content';

export function WritingPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">Blog</p>
      <h2>Posts, notes, and thoughts</h2>

      <div className="stack-list">
        {writing.map((entry) => (
          <article key={entry.title} className="item-card">
            <strong>{entry.title}</strong>
            <p className="muted-line">{entry.date}</p>
            {'content' in entry && entry.content ? (
              entry.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))
            ) : (
              <p>{entry.summary}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
