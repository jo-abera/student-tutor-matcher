export default function SearchBar() {
  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur xl:p-8">
      <div className="grid gap-4 lg:grid-cols-[2fr_1fr_1fr_1fr_auto]">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-500">Search</span>
          <input
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent-500"
            name="search"
            placeholder="Math, SAT, React, essay writing..."
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-500">Subject</span>
          <select
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent-500"
            name="subject"
          >
            <option value="">All subjects</option>
            <option value="math">Math</option>
            <option value="sat">SAT</option>
            <option value="react">React</option>
            <option value="essay-writing">Essay writing</option>
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-500">
            Availability
          </span>
          <select
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent-500"
            name="availability"
          >
            <option value="">Any availability</option>
            <option value="immediate">Immediate availability</option>
            <option value="within-24-hours">Within 24 hours</option>
            <option value="within-7-days">Within 7 days</option>
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
          />
        </label>
        <button
          type="button"
          className="self-end rounded-2xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          Reset
        </button>
      </div>
    </section>
  );
}
