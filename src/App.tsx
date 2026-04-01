import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutPage } from './pages/AboutPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { CvPage } from './pages/CvPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { WritingPage } from './pages/WritingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AboutPage />} />
        <Route path="cv" element={<CvPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="certificates" element={<CertificatesPage />} />
        <Route path="writing" element={<WritingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
