import { Link } from 'react-router-dom';

export default function TutorCard() {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-soft transition hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHV0b3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Tutor profile"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
          Featured
        </span>
      </div>

      <div className="space-y-5 p-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-accent-600">Joe Doe</p>
          <h3 className="text-2xl font-bold text-slate-900">Math Tutor</h3>
          <p className="text-sm text-slate-600">Math tutor title</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
            Math
          </span>
        </div>

        <p className="text-sm leading-6 text-slate-600">
          5 years of experience in teaching math.
        </p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-slate-900">$40/hr </p>
            <p className="text-sm text-slate-500">4.8 (120 reviews)</p>
          </div>
          <Link
            to="/tutor/1"
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 "
          >
            View Profile
          </Link>
        </div>
      </div>
    </article>



  );
}
