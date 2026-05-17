export default function SearchBar({filters, onChange, onReset, subjects, availabilities}) {
  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur xl:p-8">
      <div className="grid gap-4 lg:grid-cols-[2fr_1fr_1fr_1fr_auto]">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-500">Search</span>
          <input
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent-500"
            name="search"
            placeholder="Math, SAT, React, essay writing..."
            value={filters.search}
            onChange={onChange}
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-500">Subject</span>
          <select
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent-500"
            name="subject"
            value={filters.subject}
            onChange={onChange}
          >
            <option value="">All subjects</option>
           {subjects.map((subject)=>(
            <option key={subject} value={subject}>
              {subject}
            </option>
           ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-500">
            Availability
          </span>
          <select
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent-500"
            name="availability"
            value={filters.availability}
            onChange={onChange}
          >
        
            <option value="">Any time</option>
            {availabilities.map((slot) =>(
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-500">Max rate</span>
          <input
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent-500"
            type="number"
            name="maxRate"
            min="10"
            max="500"
            value={filters.maxRate}
            onChange={onChange}
          />
        </label>
        <button
          type="button"
          onClick={onReset}
          className="self-end rounded-2xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          Reset
        </button>
      </div>
    </section>
  );
}
