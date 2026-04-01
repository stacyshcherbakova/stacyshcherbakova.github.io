import { NavLink, Outlet } from 'react-router-dom';
import { site } from '../data/content';

const navItems = [
  ['/', 'About'],
  ['/cv', 'CV'],
  ['/projects', 'Projects'],
  ['/certificates', 'Certificates'],
  ['/writing', 'Blog'],
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
    </div>
  );
}
