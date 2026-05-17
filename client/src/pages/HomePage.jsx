import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import TutorCard from '../components/TutorCard';

const defaultFilters = {
  search: '',
  subject: '',
  availability: '',
  maxRate: '',
};
const subjectOptions = [
  'math',
  'SAT',
  'Algebra',
  'Physics',
  'Calculus',
  'English',
  'Essay Writing',
  'Literature',
  'JavaScript',
  'React',
  'Web Development',
];

const availabilityOptions = [
  'Weekeninghts',
  'Saturday Mornings',
  'Afternoons',
  'Sunday Mornings',
  'Flexible',
  'Evenings',
  'Weekends',
];

export default function HomePage() {
  const [filters, setFilters] = useState(defaultFilters);
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTutors = async () => {
      try {
        setLoading(true);
        const data = await fetchTutors(filters);
        setTutors(data);
        setError('');
      } catch (err) {
        setError('We coundnot load tutors right now.');
      } finally {
        setLoading(false);
      }
    };
    loadTutors();
  }, [filters]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((current) => ({ ...current, [name]: value }));
  };

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-96 bg-glow" />
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-9">
        <div className="grid gap-10 rounded-[2.5rem] bg-slate-950 px-6 py-10 text-white shadow-soft lg:grid-cols-[1.3fr_0.7fr] lg:px-10">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 ">
              Student tutoring marketpalce
            </span>
            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
                Find the right tutor fast, then book a session in minutes.
              </h1>
              <p className="max-w-2xl text-lg text-slate-300">
                Discover trusted tutors by subject, budget, and schedule with a
                clean booking flow built for busy students.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <span>4.8+ average tutor rating</span>
              <span>Real-tme search filters</span>
              <span>Simple session booking</span>
            </div>
          </div>
          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-accent-500">
                Why choose our platform?
              </p>
              <p className="mt-3 text-2xl font-semibold">
                We make it easy to find and book the perfect tutor.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                'Quickly compare tutors, rates, and availability',
                'Open rich tutor profiles without losing your search',
                'Book a learning session with a low-friction form',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
            {/*
              <div className="grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-200">
                  Quickly compare tutors, rates, and availability
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-200">
                  Open rich tutor profiles without losing your search
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-200">
                  Book a learning session with a low-friction form
                </div>
              </div>
            */}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 pb-20 sm:px-6 lg:px-8">
        <SearchBar
          filters={filters}
          onChange={handleChange}
          onReset={() => setFilters(defaultFilters)}
          subjects={subjectOptions}
          availabilities={availabilityOptions}
        />
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Browse tutors</h2>
            <p className="text-slate-600">
              {loading ? 'Loading...' : `${tutors.length}tutors available`}
            </p>
          </div>
        </div>

        {error && (
          <div className="rounded-2xl bg-rose-50 px-4 py-3 text-rose-700">
            {error}
          </div>
        )}
        {loading ? (
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-80 animate-pluse rounded-[2rem] bg-white/70 shadow-soft"
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {tutors.map((tutor) => (
              <TutorCard key={tutor._id || tutor.id} tutor={tutor} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
