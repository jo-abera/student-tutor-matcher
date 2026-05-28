import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { fetchBookings, fetchTutor } from '../lib/api';

export default function TutorProfilePage() {
  const { id } = useParams();
  const [tutor, setTutor] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      if (!id) {
        setError('Invalid tutor ID');
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const tutorData = await fetchTutor(id);
        setTutor(tutorData);
      } catch (err) {
        console.error('Tutor load error:', err);
        setError(`Could not load tutor profile: ${err.message}`);
        setLoading(false);
        return;
      }

      try {
        const bookingData = await fetchBookings();
        setBookings(bookingData.filter((booking) => booking.tutorId === id));
      } catch (err) {
        console.error('Bookings load error:', err);
        setBookings([]);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        Loading profile...
      </div>
    );
  }

  if (error || !tutor) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-rose-700 sm:px-6 lg:px-8">
        {error}
      </div>
    );
  }

  const handleBookingSuccess = (booking) => {
    setBookings((current) => [booking, ...current]);
  };

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:p-8">
      <Link
        to="/"
        className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
      >
        Back to search
      </Link>
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white shodow-soft">
          <img
            src={tutor.image}
            alt={tutor.name}
            className="h-80 w-full object-cover"
          />
          <div className="space-y-6 p-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
                {tutor.location}
              </p>
              <h1 className="text-4xl font-extrabold text-slate-950">
                {tutor.name}
              </h1>
              <p className="text-lg text-slate-600">{tutor.title}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Rate</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  ${tutor.hourlyRate}/hr
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Rating</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {tutor.rating}
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Lessons</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {tutor.lessonsCompleted}+
                </p>
              </div>
            </div>
            <p className="text-base leading-7 text-slate-600">{tutor.bio}</p>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-500">Subjects</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tutor.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-full bg-accent-50 px-4 py-2 text-sm font-medium text-accent-700"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Availability
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tutor.availability.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Languages
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tutor.languages.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <section className="rounded-[2rem] border-slate-200 bg-white p-6 shadow-soft">
            <div className="mb-6 space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
                Book a session
              </p>
              <h2 className="text-2xl font-bold text-slate-950">
                Reserve time with {tutor.name}
              </h2>
              <p className="text-slate-600">{tutor.responseTime}</p>
            </div>
            <BookingForm
              tutorId={tutor._id || tutor.id}
              tutorName={tutor.name}
              onSuccess={handleBookingSuccess}
            />
          </section>
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
                  Recent bookings
                </p>
                <h2 className="text-2xl font-bold text-slate-950">
                  Session queue
                </h2>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                {bookings.length}
              </span>
            </div>
            <div className="space-y-3">
              {bookings.length === 0 ? (
                <p className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
                  No sessions booked yet. Be the first to reserve a slot.
                </p>
              ) : (
                bookings.map((booking) => (
                  <div
                    key={booking._id || booking.id}
                    className="rounded-2xl bg-slate-50 px-4 py-4"
                  >
                    <p className="font-semibold text-slate-900">
                      {booking.studentName}
                    </p>
                    <p className="text-sm text-slate-600">
                      {booking.date} at {booking.timeSlot}
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
