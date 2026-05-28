import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TutorProfilePage from "./pages/TutorProfilePage";

//import TutorProfilepage from './pages/TutorProfilePage';

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
            Student Tutor Matcher
          </p>
          <p className="text-lg font-bold text-gray-900">
            Find tutors who fit the way you learn.
          </p>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tutors/:id" element={<TutorProfilePage />} />
      </Routes>
    </div>
  );
}
