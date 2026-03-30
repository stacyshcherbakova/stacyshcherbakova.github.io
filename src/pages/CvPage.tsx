import { cvSummary, education, experience, publications, researchProjects, skills } from '../data/content';

export function CvPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">CV</p>
      <h2>Curriculum Vitae</h2>
      <p>{cvSummary.headline}</p>
      <p className="section-text">{cvSummary.blurb}</p>

      <div className="stack-list">
        <section className="item-card">
          <strong>Experience</strong>
          <div className="stack-list compact-list">
            {experience.map((item) => (
              <div key={item.role + item.org}>
                <p className="item-heading">{item.role} · {item.org}</p>
                <p className="muted-line">{item.dates}</p>
                <ul className="bullet-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="item-card">
          <strong>Education</strong>
          <div className="stack-list compact-list">
            {education.map((item) => (
              <div key={item.degree}>
                <p className="item-heading">{item.degree}</p>
                <p className="muted-line">{item.place} · {item.dates}</p>
                <p>{item.notes}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="item-card">
          <strong>Technical skills</strong>
          <div className="tag-row spaced-row">
            {skills.map((skill) => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </section>

        <section className="item-card">
          <strong>Publications</strong>
          <ul className="bullet-list">
            {publications.map((publication) => (
              <li key={publication.title}>
                <a className="publication-link" href={publication.href} target="_blank" rel="noreferrer">
                  {publication.title}
                </a>
                <div className="muted-line">{publication.note}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="item-card">
          <strong>Selected research projects</strong>
          <div className="stack-list compact-list">
            {researchProjects.map((project) => (
              <div key={project.title}>
                <p className="item-heading">{project.title}</p>
                <p className="muted-line">{project.dates}</p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
