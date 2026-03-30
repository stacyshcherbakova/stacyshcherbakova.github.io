import { certificates } from '../data/content';

export function CertificatesPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">Certificates</p>
      <h2>Certificates and courses</h2>
      <div className="stack-list">
        {certificates.map((item) => (
          <article key={item.title} className="item-card">
            <div className="certificate-header">
              <strong>{item.title}</strong>
              <span className="tag certificate-tag">{item.kind}</span>
            </div>
            <p>{item.issuer}</p>
            {'details' in item && item.details ? <p className="muted-line">{item.details}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
