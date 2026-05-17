import { useState } from 'react';
import { creatingBooking } from '../lib/api';
import { timeSlots } from '../data/timeSlots';

const initialForm = {
  studentName: '',
  studentEmail: '',
  date: '',
  timeSlote: timeSlots[0],
  notes: '',
};

export default function BookingForm({ tutorId, tutorName, onSuccess }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', message: '' });
    try {
      const booking = await creatingBooking({ tutorId, ...form });
      setStatus({
        type: 'success',
        message: `Session booked with ${tutorName}.`,
      });
      setForm(initialForm);
      onSuccess(booking);
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-500">
            Student Name
          </span>
          <input
            required
            name="studentName"
            value={form.studentName}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-accent-500"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-500">Email</span>
          <input
            required
            type="email"
            name="studentEmail"
            onChange={handleChange}
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
            min={today}
            onChange={handleChange}
            className="w-full rounded-2xl border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-accent-500"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-500">
            Time slot
          </span>
          <select
            name="timeSlot"
            value={form.timeSlot}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-accent-500"
          >
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
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
          value={form.notes}
          onChange={handleChange}
          placeholder="Share what you'd like to focus on this session."
          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-accent-500"
        />
      </label>

      {status.message && (
        <div
          className={`rounded-2xl px-4 py-3 text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-rose-50 text-rose-700'}`}
        >
          {status.message}
        </div>
      )}

      <button
        disabled={submitting}
        className="w-full rounded-2xl bg-slate-900 px-5 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? 'Booking...' : 'Book session'}
      </button>
    </form>
  );
}
