import { projects } from '../data/content';

export function ProjectsPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">Projects</p>
      <h2>Selected work</h2>
      <div className="stack-list">
        {projects.map((project) => (
          <article key={project.name} className="item-card">
            {'href' in project && project.href ? (
              <a href={project.href} target="_blank" rel="noopener noreferrer"><strong>{project.name}</strong></a>
            ) : (
              <strong>{project.name}</strong>
            )}
            <p>{project.description}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
