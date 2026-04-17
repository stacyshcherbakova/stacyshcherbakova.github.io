import { NavLink, Outlet } from 'react-router-dom';
import { site } from '../data/content';

const navItems = [
  ['/', 'About'],
  ['/cv', 'CV'],
  ['/projects', 'Projects'],
  ['/certificates', 'Certificates'],
] as const;

export function Layout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="hero-stack">
          <p className="site-name">{site.name}</p>
          <h1>{site.title}</h1>
          <p className="tagline">{site.tagline}</p>
          <nav className="nav">
            {navItems.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="page-wrap">
        <Outlet />
      </main>

      <footer className="site-footer">
        <span>{site.location}</span>
        <span className="footer-sep">·</span>
        {site.contact.socials.map((social, i) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
          >
            {social.label}{i < site.contact.socials.length - 1 && <span className="footer-sep">·</span>}
          </a>
        ))}
      </footer>
    </div>
  );
}
