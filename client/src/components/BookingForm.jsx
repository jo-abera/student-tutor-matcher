export default function BookingForm() {
  return (
    <form className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-500">
            Student Name
          </span>
          <input
            required
            name="studentName"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-accent-500"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-500">Email</span>
          <input
            required
            type="email"
            name="studentEmail"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-accent-500"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-500">
            Session date
          </span>
          <input
            required
            type="date"
            name="date"
            className="w-full rounded-2xl border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-accent-500"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-500">
            Time slot
          </span>
          <select
            name="timeSlot"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-accent-500"
          >
            <option value=""></option>
          </select>
        </label>
      </div>
      <label className="space-y-2">
        <span className="text-sm font-semibold text-slate-500">
          Learning goals
        </span>
        <textarea
          name="notes"
          rows="4"
          placeholder="Share what you'd like to focus on this session."
          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-accent-500"
        />
      </label>
      <div className="rounded-2xl px-4 py-3 text-sm font-medium"></div>
      <button className="w-full rounded-2xl bg-slate-900 px-5 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60">
        Booking..
      </button>
    </form>
  );
}
