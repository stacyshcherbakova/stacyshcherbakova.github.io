import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { education, experience, publications, researchProjects, skills } from '../data/content';

type LightboxImage = { src: string; alt: string };

export function CvPage() {
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null);
    };
    document.addEventListener('keydown', onKeyDown);

    // Lock background scroll, compensating for the scrollbar to avoid a layout shift.
    const { body } = document;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;
    body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, [lightbox]);

  return (
    <section className="page-card">
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
                {item.images && item.images.length > 0 && (
                  <div className="photo-strip">
                    {item.images.map((image) => (
                      <button
                        key={image.src}
                        type="button"
                        className="photo-thumb"
                        onClick={() => setLightbox(image)}
                        aria-label={`Open image: ${image.alt}`}
                      >
                        <img src={image.src} alt={image.alt} loading="lazy" />
                      </button>
                    ))}
                  </div>
                )}
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

      <div className="cv-download">
        <a
          href="/Anastasiia_Shcherbakova_CV_2026.pdf"
          download
          className="tag social-tag"
        >
          Download PDF
        </a>
        <span className="cv-download-note">Download a PDF version of the CV</span>
      </div>

      {lightbox &&
        createPortal(
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close image"
            >
              ✕
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </section>
  );
}
