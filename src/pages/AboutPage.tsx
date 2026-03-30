import { site } from '../data/content';

export function AboutPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">About</p>
      <h2>Hi, I’m Stacy.</h2>
      <p>{site.intro}</p>
      <p>
        This page can become your more personal introduction: what you care about, what you build,
        what kinds of problems you enjoy, and what makes your work yours.
      </p>

      <div className="stack-list">
        <section className="item-card">
          <strong>Location</strong>
          <p>{site.location}</p>
        </section>

        <section className="item-card">
          <strong>Contact</strong>
          <div className="tag-row spaced-row">
            {site.contact.socials.map((social) => (
              <a
                key={social.label}
                className="tag social-tag"
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                {social.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
