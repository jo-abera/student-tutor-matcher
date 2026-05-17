import { Link } from 'react-router-dom';

export default function TutorCard({ tutor }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-soft transition hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img
          src={tutor.image}
          alt={tutor.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {tutor.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
            Featured
          </span>
        )}
      </div>

      <div className="space-y-5 p-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-accent-600">{tutor.name}</p>
          <h3 className="text-2xl font-bold text-slate-900">{tutor.title}</h3>
          <p className="text-sm text-slate-600">{tutor.title}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tutor.subjects.map((subject) => (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
              {subject}
            </span>
          ))}
        </div>

        <p className="text-sm leading-6 text-slate-600">{tutor.bio}</p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-slate-900">
              ${tutor.hourlyRate}
            </p>
            <p className="text-sm text-slate-500">
              {tutor.rating}rating . {tutor.lessonsCompleted} + lessons
            </p>
          </div>
          <Link
            to={`/tutor/${tutor.id} || tutor._id}`}
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 "
          >
            View Profile
          </Link>
        </div>
      </div>
    </article>
  );
}
